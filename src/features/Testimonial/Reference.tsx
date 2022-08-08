import { Box, Typography, useTheme } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { CSSProperties, FC, memo } from "react";

import ReferenceProps from "./ReferenceProps";
import useSx from "./useReferenceSx";

const Reference: FC<ReferenceProps> = ({ name, jobTitle, refereePicture, company, comment }) => {
  const sx = useSx();
  const image = getImage(refereePicture);
  const theme = useTheme();
  const gatsbyImageStyle: CSSProperties = { borderRadius: theme.shape.borderRadius, minWidth: 60 };

  return (
    <div>
      <Typography sx={sx.comment} component="p">
        {`"${comment}"`}
      </Typography>
      <Box sx={sx.profileContainer}>
        {
          image && (
            <GatsbyImage
              image={image}
              alt={`Picture of ${name}`}
              style={gatsbyImageStyle}
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

if (process.env.NODE_ENV === "development") Reference.whyDidYouRender = true;

export default memo(Reference);