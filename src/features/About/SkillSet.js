import { Box, Grid, Stack } from "@mui/material";

import SkillRating from "./SkillRating";
import data from "contents/data";
import useSx from "./useSkillSetSx";

const SkillSet = () => {
  const sx = useSx();
  const mid = Math.ceil(data.about.skills.length / 2);

  return (
    <Box sx={sx.root}>
      <Grid container spacing={6}>
        <Grid item sm={6} xs={12}>
          <Stack spacing={6}>
            {data.about.skills.slice(0, mid).map(({ name, rating }) => (
              <SkillRating
                key={name}
                name={name}
                rating={rating}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Stack spacing={6}>
            {data.about.skills.slice(-mid).map(({ name, rating }) => (
              <SkillRating
                key={name}
                name={name}
                rating={rating}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

SkillSet.whyDidYouRender = true;

export default SkillSet;