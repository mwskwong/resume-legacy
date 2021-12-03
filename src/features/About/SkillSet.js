import { Box, Chip, Grid } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";

import SkillRating from "./SkillRating";
import useSx from "./useSkillSetSx";

const SkillSet = () => {
  const sx = useSx();
  const { skillNodes } = useStaticQuery(graphql`{
    skillNodes: allContentfulSkill(sort: {fields: name}) {
      nodes {
        name
        rating
      }
    }
  }`);

  const mainSkills = skillNodes.nodes.filter(({ rating }) => Boolean(rating));
  const supplementarySkills = skillNodes.nodes.filter(({ rating }) => !rating);

  return (
    <div>
      <Grid container spacing={6}>
        {mainSkills.map(({ name, rating }) => (
          <Grid key={name} item sm={6} xs={12}>
            <SkillRating name={name} rating={rating} />
          </Grid>
        ))}
      </Grid>
      <Box sx={sx.supplementarySkillsContainer}>
        {supplementarySkills.map(({ name }) => (
          <Chip key={name} sx={sx.supplementarySkill} label={name} size="small" />
        ))}
      </Box>
    </div>
  );
};

SkillSet.whyDidYouRender = true;

export default SkillSet;