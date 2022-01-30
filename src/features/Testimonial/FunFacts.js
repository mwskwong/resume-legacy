import { Box, Grid, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";

import useSx from "./useFunFactSx";

const FunFacts = () => {
  const sx = useSx();
  const { funFactNodes } = useStaticQuery(graphql`{
    funFactNodes: allContentfulFunFact(sort: {fields: title}) {
      nodes {
        title
        value
      }
    }
  }`);

  const funFacts = funFactNodes.nodes;

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