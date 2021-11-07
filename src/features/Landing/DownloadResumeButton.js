import { Button, useTheme } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";

import PropTypes from "prop-types";

const DownloadResumeButton = ({ sx }) => {
  const theme = useTheme();
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
      color={theme.palette.mode === "light" ? "secondary" : "primary"}
      size="large"
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