import { Box, Typography } from "@mui/material";
import React, { Fragment, useMemo } from "react";
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

  const strings = useMemo(() => [
    `${name.firstName} ${name.lastName}.`,
    ...occupationNodes.nodes.map(({ title }) => `A ${title}.`)
  ], [name.firstName, name.lastName, occupationNodes.nodes]);

  const typeItOptions = {
    startDelete: true,
    breakLines: false,
    loop: true
  };

  return (
    <Box sx={sx.root}>
      <Typography sx={sx.title} variant="h1">
        {"I Am "}
        <TypeIt options={typeItOptions}>
          {strings.map((string, index) => (
            <Fragment key={index}>
              {string}
              <br />
            </Fragment>
          ))}
        </TypeIt>
      </Typography>
    </Box>
  );
};

Title.whyDidYouRender = true;

export default Title;