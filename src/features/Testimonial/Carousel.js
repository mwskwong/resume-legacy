import { KeyboardArrowLeftRounded as ArrowLeft, KeyboardArrowRightRounded as ArrowRight } from "@mui/icons-material";
import { Box, Grid, IconButton, Stack } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";

import Pagination from "./Pagination";
import Reference from "./Reference";
import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import useSx from "./useCarouselSx";

const Carousel = () => {
  const sx = useSx();
  const [index, setIndex] = useState(0);
  const { referenceNodes } = useStaticQuery(graphql`{
    referenceNodes: allContentfulTestimonial(sort: {fields: name}) {
      nodes {
        name
        jobTitle
        refereePicture {
          gatsbyImageData(width: 60, aspectRatio: 1, placeholder: BLURRED)
        }
        company
        comment {
          comment
        }
      }
    }
  }`);

  const references = referenceNodes.nodes.map(({ comment, ...node }) => ({
    ...node,
    comment: comment.comment
  }));

  const handleChangeIndex = index => setIndex(index);
  const handlePrev = () => setIndex(index => index - 1);
  const handleNext = () => setIndex(index => index + 1);

  return (
    <Grid item md={6} xs={12}>
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
          references={references}
          onChangeIndex={handleChangeIndex}
          index={index}
        />
      </Box>
      <SwipeableViews resistance disableLazyLoading index={index} onChangeIndex={handleChangeIndex}>
        {references.map(({ name, jobTitle, refereePicture, company, comment }) => (
          <Reference
            key={name}
            name={name}
            jobTitle={jobTitle}
            refereePicture={refereePicture}
            company={company}
            comment={comment}
          />
        ))}
      </SwipeableViews>
    </Grid>
  );
};

Carousel.whyDidYouRender = true;

export default Carousel;