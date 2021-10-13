import { Box, Typography } from "@mui/material";
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

  return (
    <div>
      <Typography sx={sx.hello} variant="h3">
        {"Hello! "}
        <Box sx={sx.name} component="span">
          {`I'm ${name.firstName} ${name.lastName}.`}
        </Box>
      </Typography>
      <Box sx={sx.occupationContainer}>
        {occupations.map((occupation, index) => (
          <Fragment key={occupation}>
            {index !== 0 && <Box sx={sx.dot} />}
            <Typography variant="subtitle1">
              {occupation}
            </Typography>
          </Fragment>
        ))}
      </Box>
      <Typography sx={sx.intro}>
        {introNode.content.content}
      </Typography>
    </div>
  );
};

Message.whyDidYouRender = true;

export default Message;