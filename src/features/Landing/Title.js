import { Box, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";

import loadable from "@loadable/component";
import useSx from "./useTitleSx";
import { visuallyHidden } from "@mui/utils";

const Typewriter = loadable(() => import("typewriter-effect"), { ssr: false });

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
  const titleStrings = [
    `${name.firstName} ${name.lastName}.`,
    ...occupations.map(occupation => `a ${occupation}.`)
  ];
  const typewriterOptions = {
    strings: titleStrings,
    loop: true,
    autoStart: true
  };

  return (
    <Box sx={sx.root}>
      <Typography sx={sx.greetings} variant="h4" gutterBottom>
        Greetings
      </Typography>
      <Typography sx={sx.title} variant="h1" component="div" aria-hidden>
        {"I Am "}
        <Box component="span" sx={sx.importantText}>
          <Typewriter options={typewriterOptions} />
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