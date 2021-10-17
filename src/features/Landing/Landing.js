import { Container, Toolbar } from "@mui/material";

import DownloadResumeButton from "./DownloadResumeButton";
import { HOME } from "constants/nav";
import SocialMedia from "components/SocialMedia";
import Title from "./Title";
import { memo } from "react";
import useSx from "./useLandingSx";

const Landing = () => {
  const sx = useSx();

  return (
    <Container component="section" sx={sx.container} id={HOME.id}>
      <Toolbar />
      <Title />
      <SocialMedia sx={sx.socialMedia} />
      <DownloadResumeButton sx={sx.downloadButton} />
    </Container>
  );
};

Landing.whyDidYouRender = true;

export default memo(Landing);
