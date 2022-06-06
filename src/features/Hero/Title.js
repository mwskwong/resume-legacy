import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Typewriter from "typewriter-effect";
import useSx from "./useTitleSx";
import { visuallyHidden } from "@mui/utils";

const Title = () => {
  const sx = useSx();
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
  const titleStrings = useMemo(
    () => [
      `${name.firstName} ${name.lastName}.`,
      ...occupations.map(occupation => `a ${occupation}.`)
    ],
    [name.firstName, name.lastName, occupations]
  );

  const typewriterOptions = {
    strings: titleStrings,
    loop: true,
    autoStart: true
  };

  return (
    <Box sx={sx.root}>
      <Typography sx={sx.title} variant="h1" component="div" role="presentation">
        {"I Am "}
        <Typewriter options={typewriterOptions} />
      </Typography>
      <Typography sx={visuallyHidden} variant="h1">
        I Am {titleStrings.join(" I Am ")}
      </Typography>
    </Box>
  );
};

Title.whyDidYouRender = true;

export default Title;