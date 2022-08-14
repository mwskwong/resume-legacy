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
      allContentfulOccupation(sort: {fields: priority}) {
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

  const jobTitles = occupations.map(({ title }) => title);
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
        {jobTitles.map((title, index) => (
          <Fragment key={title}>
            {index !== 0 && <Box sx={sx.dot} />}
            <Typography sx={sx.jobTitle} component="div">
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

if (process.env.NODE_ENV === "development") Message.whyDidYouRender = true;

export default Message;