import * as styles from "./reference.module.css";

import { Box, Typography } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { FC, memo } from "react";

import ReferenceProps from "./ReferenceProps";
import useSx from "./useReferenceSx";

const Reference: FC<ReferenceProps> = ({ name, jobTitle, refereePicture, company, comment }) => {
  const sx = useSx();
  const image = getImage(refereePicture);

  return (
    <div>
      <Typography variant="subtitle1" component="p" sx={sx.comment}>
        {`"${comment}"`}
      </Typography>
      <Box sx={sx.profileContainer}>
        {
          image && (
            <GatsbyImage
              image={image}
              alt={`Picture of ${name}`}
              className={styles.picture}
            />
          )
        }
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

Reference.whyDidYouRender = true;

export default memo(Reference);