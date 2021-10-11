import { Container, Toolbar } from "@mui/material";

import DownloadResumeButton from "./DownloadResumeButton";
import { HOME } from "constants/nav";
import SocialMedia from "components/SocialMedia";
import Title from "./Title";
import useSx from "./useLandingSx";

const Landing = () => {
  const sx = useSx();

  return (
    <Container component="section" sx={sx.container} id={HOME.id}>
      <Toolbar />
      <Title />
      <SocialMedia sx={sx.socialMedia} />
      <DownloadResumeButton sx={sx.downloadResumeButton} />
    </Container>
  );
};

Landing.whyDidYouRender = true;

export default Landing;