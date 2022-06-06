import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";

import TypeIt from "typeit";
import useSx from "./useTitleSx";

const Title = () => {
  const sx = useSx();
  const typeItRef = useRef();
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

  useEffect(() => {
    const typeIt = new TypeIt(typeItRef.current, {
      strings: occupationNodes.nodes.map(({ title }) => `A ${title}.`),
      startDelay: 1500,
      startDelete: true,
      breakLines: false,
      loop: true,
      nextStringDelay: 1500,
      waitUntilVisible: true
    }).go();

    return () => typeIt.destroy();
  }, [occupationNodes.nodes]);

  return (
    <Box sx={sx.root}>
      <Typography sx={sx.title} variant="h1">
        {"I Am "}
        <Box ref={typeItRef} component="span" sx={sx.typeIt}>
          {`${name.firstName} ${name.lastName}.`}
        </Box>
      </Typography>
    </Box>
  );
};

Title.whyDidYouRender = true;

export default Title;