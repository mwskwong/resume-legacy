import { graphql, useStaticQuery } from "gatsby";

import { Grid } from "@mui/material";
import SkillRating from "./SkillRating";

const SkillSet = () => {
  const { skillNodes } = useStaticQuery(graphql`{
    skillNodes: allContentfulSkill(sort: {fields: name}) {
      edges {
        node {
          name
          rating
        }
      }
    }
  }`);

  const skills = skillNodes.edges.map(({ node: { name, rating } }) => ({ name, rating }));

  return (
    <div>
      <Grid container spacing={6}>
        {skills.map(({ name, rating }) => (
          <Grid key={name} item sm={6} xs={12}>
            <SkillRating
              name={name}
              rating={rating}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

SkillSet.whyDidYouRender = true;

export default SkillSet;