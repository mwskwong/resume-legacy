import { Box, Typography } from "@mui/material";
import React, { FC, Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";

import useSx from "./useMessageSx";

const Message: FC = () => {
  const sx = useSx();
  const {
    name,
    allContentfulOccupation: { nodes: occupations },
    contentfulSelfIntroduction
  } = useStaticQuery<Queries.AboutMessageQuery>(graphql`
    query AboutMessage {
      name: contentfulName {
        firstName
        lastName
      }
      allContentfulOccupation(sort: {fields: title}) {
        nodes {
          title
        }
      },
      contentfulSelfIntroduction {
        content {
          content
        }
      }
    }
  `);

  const occupationTitles = occupations.map(({ title }) => title);
  const intro = contentfulSelfIntroduction?.content?.content;

  return (
    <div>
      <Typography sx={sx.hello} variant="h3">
        {"Hello! "}
        <Box sx={sx.name} component="span">
          {`I'm ${name?.firstName} ${name?.lastName}.`}
        </Box>
      </Typography>
      <Box sx={sx.occupationContainer}>
        {occupationTitles.map((title, index) => (
          <Fragment key={title}>
            {index !== 0 && <Box sx={sx.dot} />}
            <Typography variant="subtitle1" component="div">
              {title}
            </Typography>
          </Fragment>
        ))}
      </Box>
      <Typography sx={sx.intro}>
        {intro}
      </Typography>
    </div>
  );
};

Message.whyDidYouRender = true;

export default Message;