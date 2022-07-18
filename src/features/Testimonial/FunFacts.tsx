import { Box, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

import useSx from "./useFunFactSx";

const FunFacts: FC = () => {
  const sx = useSx();
  const {
    allContentfulFunFact: { nodes: funFactNodes },
    allContentfulCourse: { totalCount: numOfCompletedCourses }
  } = useStaticQuery<Queries.FunFactQuery>(graphql`
    query FunFact {
      allContentfulFunFact {
        nodes {
          title
          value
        }
      }
      allContentfulCourse {
        totalCount
      }
    }
  `);

  const funFacts = [
    ...funFactNodes,
    { title: "Completed Courses", value: numOfCompletedCourses }
  ]
    .sort((e1, e2) => {
      const title1 = e1.title ?? "";
      const title2 = e2.title ?? "";
      return title1 > title2 ? 1 : title1 < title2 ? -1 : 0;
    });

  return (
    <Grid item container spacing={2} md={6} xs={12}>
      {funFacts.map(({ title, value }) => (
        <Grid key={title} item xs={6}>
          <Box sx={sx.root}>
            <Typography variant="h3" component="div" sx={sx.value}>
              {value}
            </Typography>
            <Typography sx={sx.title}>
              {title}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

if (process.env.NODE_ENV === "development") FunFacts.whyDidYouRender = true;

export default FunFacts;