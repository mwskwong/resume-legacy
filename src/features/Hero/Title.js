import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

import TypeIt from "typeit-react";
import useSx from "./useTitleSx";

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

  const typeItOptions = useMemo(() => ({
    strings: [
      `${name.firstName} ${name.lastName}.`,
      ...occupationNodes.nodes.map(occupation => `A ${occupation.title}.`)
    ],
    waitUntilVisible: true,
    startDelete: true,
    loop: true
  }), [name.firstName, name.lastName, occupationNodes.nodes]);

  return (
    <Box sx={sx.root}>
      <Typography sx={sx.title} variant="h1">
        {"I Am "}
        <TypeIt options={typeItOptions}>
          {typeItOptions.strings[0]}
        </TypeIt>
      </Typography>
    </Box>
  );
};

Title.whyDidYouRender = true;

export default Title;