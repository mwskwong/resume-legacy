import { Box, LinearProgress, Typography } from "@mui/material";

import PropTypes from "prop-types";
import useSx from "./useSkillRatingSx";

const SkillRating = ({ name, rating }) => {
  const sx = useSx();
  const value = rating * 100 / 5;

  return (
    <Box>
      <Box sx={sx.ratingContainer}>
        <Typography sx={sx.skillName} variant="subtitle2">
          {name}
        </Typography>
        <Typography>
          {`${value}%`}
        </Typography>
      </Box>
      <LinearProgress variant="determinate" value={value} aria-hidden />
    </Box>
  );
};

SkillRating.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

SkillRating.whyDidYouRender = true;

export default SkillRating;
