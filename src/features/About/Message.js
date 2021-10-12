import { Box, Stack, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";

import { Fragment } from "react";
import useSx from "./useMessageSx";

const Message = () => {
  const sx = useSx();
  const { name, occupationNodes, introNode } = useStaticQuery(graphql`{
    name: contentfulName {
      firstName
      lastName
    }
    occupationNodes: allContentfulOccupation(sort: {fields: title}) {
      edges {
        node {
          title
        }
      }
    },
    introNode: contentfulSelfIntroduction {
      content {
        content
      }
    }
  }`);

  const occupations = occupationNodes.edges.map(({ node: { title } }) => title);

  const occupationDirection = {
    xs: "column",
    sm: "row"
  };

  return (
    <Box sx={sx.root}>
      <Typography sx={sx.hello} variant="h3" gutterBottom>
        {"Hello! "}
        <Box sx={sx.name} component="span">
          {`I'm ${name.firstName} ${name.lastName}.`}
        </Box>
      </Typography>
      <Stack sx={sx.occupationContainer} spacing={2} direction={occupationDirection}>
        {occupations.map((occupation, index) => (
          <Fragment key={occupation}>
            {index !== 0 && <Box sx={sx.dot} />}
            <Typography variant="subtitle1">
              {occupation}
            </Typography>
          </Fragment>
        ))}
      </Stack>
      <Typography sx={sx.intro}>
        {introNode.content.content}
      </Typography>
    </Box>
  );
};

Message.whyDidYouRender = true;

export default Message;