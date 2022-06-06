import { Box, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";

import React from "react";
import useSx from "./useTitleSx";

const Title = () => {
  const sx = useSx();
  const { name } = useStaticQuery(graphql`{
    name: contentfulName {
      firstName
      lastName
    }
  }`);

  return (
    <Box sx={sx.root}>
      <Typography sx={sx.title} variant="h1">
        {"I Am "}
        <Box component="span" sx={sx.name}>
          {`${name.firstName} ${name.lastName}`}
        </Box>
      </Typography>
    </Box>
  );
};

Title.whyDidYouRender = true;

export default Title;