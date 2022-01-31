import { Box, Typography } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useReferenceSx";

const Reference = ({ name, jobTitle, refereePicture, company, comment }) => {
  const sx = useSx();
  const image = getImage(refereePicture);
  const avatarStyle = { borderRadius: "50%", minWidth: 60 };

  return (
    <div>
      <Typography variant="subtitle1" component="p" sx={sx.comment}>
        {`"${comment}"`}
      </Typography>
      <Box sx={sx.profileContainer}>
        <GatsbyImage
          image={image}
          alt={`Picture of ${name}`}
          style={avatarStyle}
          imgStyle={avatarStyle}
        />
        <Box sx={sx.refereeInfoContainer}>
          <Typography sx={sx.name} gutterBottom>
            {`${name}, `}
            <Box sx={sx.jobTitle} component="span">
              {jobTitle}
            </Box>
          </Typography>
          <Typography sx={sx.company}>
            {company}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

Reference.propTypes = {
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  refereePicture: PropTypes.object,
  company: PropTypes.string,
  comment: PropTypes.string
};

Reference.whyDidYouRender = true;

export default memo(Reference);