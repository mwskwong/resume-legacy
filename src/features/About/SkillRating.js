import { Box, Rating, Typography } from "@mui/material";

import PropTypes from "prop-types";
import Star from "components/icons/Star";
import useSx from "./useSkillRatingSx";

const SkillRating = ({ name, rating }) => {
  const sx = useSx();
  const ratingIcon = <Star fontSize="inherit" />;

  return (
    <div>
      <Box sx={sx.ratingContainer}>
        <Typography sx={sx.skillName}>
          {name}
        </Typography>
        <Rating
          sx={sx.rating}
          name={`${name}-rating`}
          value={rating}
          readOnly
          icon={ratingIcon}
          emptyIcon={ratingIcon}
        />
      </Box>
    </div>
  );
};

SkillRating.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

SkillRating.whyDidYouRender = true;

export default SkillRating;
