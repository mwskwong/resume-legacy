import { KeyboardArrowLeftRounded as ArrowLeft, KeyboardArrowRightRounded as ArrowRight } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
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
      edges {
        node {
          name
          jobTitle
          refereePicture {
            gatsbyImageData(
              width: 58
              aspectRatio: 1
              cornerRadius: -1
              placeholder: BLURRED
            )
          }
          company
          comment {
            comment
          }
        }
      }
    }
  }`);

  const references = referenceNodes.edges.map(({ node: { comment, ...node } }) => ({
    ...node,
    comment: comment.comment
  }));

  const handleChangeIndex = index => setIndex(index);
  const handlePrev = () => setIndex(index => index - 1);
  const handleNext = () => setIndex(index => index + 1);

  return (
    <div>
      <Box sx={sx.actionContainer}>
        <Stack direction="row" spacing={2}>
          <IconButton size="small" onClick={handlePrev} disabled={index === 0}>
            <ArrowLeft fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={handleNext} disabled={index === references.length - 1}>
            <ArrowRight fontSize="small" />
          </IconButton>
        </Stack>
        <Pagination
          count={references.length}
          onChangeIndex={handleChangeIndex}
          index={index}
        />
      </Box>
      <SwipeableViews resistance index={index} onChangeIndex={handleChangeIndex}>
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
    </div>
  );
};

Carousel.whyDidYouRender = true;

export default Carousel;