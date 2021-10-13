import { graphql, useStaticQuery } from "gatsby";

import FunFactItem from "./FunFactItem";
import { Grid } from "@mui/material";

const FunFacts = () => {
  const { funFactNodes } = useStaticQuery(graphql`{
    funFactNodes: allContentfulFunFact(sort: {fields: title}) {
      edges {
        node {
          title
          value
        }
      }
    }
  }`);

  const funFacts = funFactNodes.edges.map(({ node }) => node);

  return (
    <Grid item container spacing={2} md={6} xs={12}>
      {funFacts.map(({ title, value }) => (
        <Grid key={title} item xs={6}>
          <FunFactItem
            title={title}
            value={value}
          />
        </Grid>
      ))}
    </Grid>
  );
};

FunFacts.whyDidYouRender = true;

export default FunFacts;