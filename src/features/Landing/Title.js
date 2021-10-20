import { Box, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { useEffect, useMemo, useRef } from "react";

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
  const titleStrings = useMemo(() => [
    `${name.firstName} ${name.lastName}.`,
    ...occupations.map(occupation => `a ${occupation}.`)
  ], [name.firstName, name.lastName, occupations]);


  useEffect(() => {
    new Typewriter(typewriterRef.current, {
      strings: titleStrings,
      loop: true,
      autoStart: true
    });
  }, [name.firstName, name.lastName, occupations, titleStrings]);

  return (
    <Box sx={sx.root}>
      <Typography sx={sx.greetings} variant="h4" gutterBottom>
        Greetings
      </Typography>
      <Typography sx={sx.title} variant="h1" aria-hidden>
        {"I Am "}
        <Box component="span" ref={typewriterRef} sx={sx.importantText} />
      </Typography>
      <Typography sx={visuallyHidden} variant="h1">
        I Am {titleStrings.join(" I Am ")}
      </Typography>
    </Box>
  );
};

Title.whyDidYouRender = true;

export default Title;