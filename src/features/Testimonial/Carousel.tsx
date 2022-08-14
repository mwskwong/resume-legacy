import { KeyboardArrowLeftRounded as ArrowLeft, KeyboardArrowRightRounded as ArrowRight } from "@mui/icons-material";
import { Box, Unstable_Grid2 as Grid, IconButton, Stack } from "@mui/material";
import React, { FC, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Pagination from "./Pagination";
import Reference from "./Reference";
import SwipeableViews from "react-swipeable-views";
import useSx from "./useCarouselSx";

const Carousel: FC = () => {
  const sx = useSx();
  const [index, setIndex] = useState(0);
  const { allContentfulTestimonial: { nodes: referenceNodes } } = useStaticQuery<Queries.CarouselQuery>(graphql`
    query Carousel {
      allContentfulTestimonial(sort: {fields: name}) {
        nodes {
          name
          jobTitle
          # refereePicture {
          #   gatsbyImage(aspectRatio: 1, width: 60)
          # }
          company
          comment {
            comment
          }
        }
      }
    }
  `);

  const references = referenceNodes.map(({ comment, ...node }) => ({
    ...node,
    comment: comment?.comment
  }));

  // Workaround of the first mount doesn't animate index change
  const swipeableViewsContainerStyle = {
    transition: "transform .35s cubic-bezier(.15, .3, .25, 1) 0s"
  };

  const handleChangeIndex = (index: number) => setIndex(index);
  const handlePrev = () => setIndex(index => index - 1);
  const handleNext = () => setIndex(index => index + 1);

  return (
    <Grid xs={12} md={6}>
      <Box sx={sx.actionContainer}>
        <Stack direction="row" spacing={2}>
          <IconButton
            size="small"
            onClick={handlePrev}
            disabled={index === 0}
            aria-label={"previous testimonial"}
          >
            <ArrowLeft fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            onClick={handleNext}
            disabled={index === references.length - 1}
            aria-label={"next testimonial"}
          >
            <ArrowRight fontSize="small" />
          </IconButton>
        </Stack>
        <Pagination
          count={references.length}
          index={index}
          onChangeIndex={handleChangeIndex}
        />
      </Box>
      <SwipeableViews
        resistance
        disableLazyLoading
        index={index}
        onChangeIndex={handleChangeIndex}
        containerStyle={swipeableViewsContainerStyle}
      >
        {references.map(reference => (
          <Reference
            key={reference.name}
            {...reference}
          />
        ))}
      </SwipeableViews>
    </Grid>
  );
};

if (process.env.NODE_ENV === "development") Carousel.whyDidYouRender = true;

export default Carousel;