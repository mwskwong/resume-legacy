import { Box, Container, Toolbar } from "@mui/material";

import DownloadResumeButton from "./DownloadResumeButton";
import { HOME } from "constants/nav";
import PropTypes from "prop-types";
import SocialMedia from "components/SocialMedia";
import Title from "./Title";
import { memo } from "react";
import useSx from "./useLandingSx";

const Landing = ({ sx: sxProp }) => {
  const sx = useSx({ sxProp });

  return (
    <Box sx={sx.root} >
      <Container component="section" sx={sx.container} id={HOME.id}>
        <Toolbar />
        <Title />
        <SocialMedia sx={sx.socialMedia} />
        <DownloadResumeButton sx={sx.downloadButton} />
      </Container>
    </Box>
  );
};

Landing.propTypes = {
  sx: PropTypes.object
};

Landing.whyDidYouRender = true;

export default memo(Landing);
