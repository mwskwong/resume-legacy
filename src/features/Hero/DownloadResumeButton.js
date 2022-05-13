import { graphql, useStaticQuery } from "gatsby";

import { Button } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const DownloadResumeButton = ({ sx }) => {
  const { resume } = useStaticQuery(graphql`{
    resume: contentfulAsset(title: {eq: "Resume"}) {
      localFile {
        publicURL
      }
    }
  }`);

  return (
    <Button
      sx={sx}
      variant="contained"
      size="large"
      href={resume.localFile.publicURL}
    >
      Download Resume
    </Button>
  );
};

DownloadResumeButton.propTypes = {
  sx: PropTypes.object
};

DownloadResumeButton.whyDidYouRender = true;

export default DownloadResumeButton;