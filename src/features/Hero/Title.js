import { Box, Typography } from "@mui/material";
import React, { useEffect, useMemo, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Typewriter from "typewriter-effect/dist/core";
import useSx from "./useTitleSx";
import { visuallyHidden } from "@mui/utils";

const Title = () => {
  const sx = useSx();
  const typewriterRef = useRef();
  const { name, occupationNodes } = useStaticQuery(graphql`{
    name: contentfulName {
      firstName
      lastName
    }
    occupationNodes: allContentfulOccupation(sort: {fields: title}) {
      nodes {
        title
      }
    }
  }`);

  const occupations = occupationNodes.nodes.map(({ title }) => title);
  const titleStrings = useMemo(() => occupations.map(occupation => `a ${occupation}.`), [occupations]);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: titleStrings,
      loop: true,
      autoStart: true
    });
    typewriter.start();
  }, [titleStrings]);

  return (
    <Box sx={sx.root}>
      <Typography sx={sx.title} variant="h1" component="div" role="presentation">
        {"I Am "}
        <Box ref={typewriterRef} component="span">
          {`${name.firstName} ${name.lastName}.`}
        </Box>
      </Typography>
      <Typography sx={visuallyHidden} variant="h1">
        I Am {titleStrings.join(" I Am ")}
      </Typography>
    </Box>
  );
};

Title.whyDidYouRender = true;

export default Title;