import { Box, Grid, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";

import React from "react";
import useSx from "./useFunFactSx";

const FunFacts = () => {
  const sx = useSx();
  const { funFactNodes, completedCourses } = useStaticQuery(graphql`{
    funFactNodes: allContentfulFunFact {
      nodes {
        title
        value
      }
    }
    completedCourses: allContentfulCourse {
      totalCount
    }
  }`);

  const funFacts = [
    ...funFactNodes.nodes,
    { title: "Completed Courses", value: completedCourses.totalCount }
  ]
    .sort((e1, e2) => e1.title > e2.title ? 1 : e1.title < e2.title ? -1 : 0);

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

FunFacts.whyDidYouRender = true;

export default FunFacts;