import { Box, Typography } from "@mui/material";
import React, { useEffect, useMemo, useRef } from "react";
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

  const strings = useMemo(() => [
    ...occupationNodes.nodes.map(({ title }) => `A ${title}.`),
    `${name.firstName} ${name.lastName}.`
  ], [name.firstName, name.lastName, occupationNodes.nodes]);

  useEffect(() => {
    const typeIt = new TypeIt(typeItRef.current, {
      strings,
      startDelete: true,
      breakLines: false,
      loop: true,
      nextStringDelay: [1500, 375],
      loopDelay: undefined,
      waitUntilVisible: true
    }).go();

    return () => typeIt.destroy();
  }, [strings]);

  return (
    <Box sx={sx.root}>
      <Typography sx={sx.title} variant="h1">
        {"I Am "}
        <Box ref={typeItRef} component="span" sx={sx.typeIt}>
          {strings[strings.length - 1]}
        </Box>
      </Typography>
    </Box>
  );
};

Title.whyDidYouRender = true;

export default Title;