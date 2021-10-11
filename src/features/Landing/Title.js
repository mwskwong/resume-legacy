import { Box, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { useEffect, useRef } from "react";

import Typewriter from "typewriter-effect/dist/core";
import useSx from "./useTitleSx";

const Title = () => {
  const sx = useSx();
  const typewriterRef = useRef();
  const { allContentfulOccupation } = useStaticQuery(graphql`{
    allContentfulOccupation(sort: {fields: title}) {
      edges {
        node {
          title
        }
      }
    }
  }`);

  const occupations = allContentfulOccupation.edges.map(({ node: { title } }) => title);

  useEffect(() => {
    new Typewriter(typewriterRef.current, {
      strings: [
        "Matthew Kwong",
        ...occupations.map(occupation => `a ${occupation}`)
      ],
      loop: true,
      autoStart: true
    });
  }, [occupations]);

  return (
    <Box sx={sx.root}>
      <Typography sx={sx.greetings} variant="h4" gutterBottom>
        Greetings
      </Typography>
      <Typography sx={sx.title} variant="h1">
        {"I Am "}
        <Box component="span" ref={typewriterRef} sx={sx.importantText} />
      </Typography>
    </Box>
  );
};

Title.whyDidYouRender = true;

export default Title;