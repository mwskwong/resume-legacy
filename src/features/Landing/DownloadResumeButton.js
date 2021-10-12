import { graphql, useStaticQuery } from "gatsby";

import { Button } from "@mui/material";
import PropTypes from "prop-types";

const DownloadResumeButton = ({ sx }) => {
  const { resume } = useStaticQuery(graphql`{
    resume: contentfulAsset(title: {eq: "Resume"}) {
      file {
        url
      }
    }
  }`);

  return (
    <Button
      sx={sx}
      variant="contained"
      color="secondary"
      size="large"
      component="a"
      href={resume.file.url}
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