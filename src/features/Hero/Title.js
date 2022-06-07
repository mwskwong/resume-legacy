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
    const delays = {
      beforeTyping: 375,
      afterTyping: 1500
    };

    const typeIt = new TypeIt(typeItRef.current, {
      startDelay: delays.beforeTyping,
      startDelete: true,
      breakLines: false,
      loop: true,
      nextStringDelay: 0,
      loopDelay: 0
    })
      .delete(strings[strings.length - 1].length, { delay: delays.beforeTyping }); // workaround: startDelete only deletes one char

    for (let i = 0; i < strings.length; i++) {
      typeIt.type(strings[i], { delay: delays.afterTyping });
      if (i !== strings.length - 1) typeIt.delete(null, { delay: delays.beforeTyping });
    }

    typeIt.go();

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