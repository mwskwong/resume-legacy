import { Container, Toolbar } from "@mui/material";
import { Suspense, lazy } from "react";

import DownloadResumeButton from "./DownloadResumeButton";
import { HOME } from "constants/nav";
import SocialMedia from "components/SocialMedia";
import useSx from "./useLandingSx";

const Title = lazy(() => import("./Title"));

const Landing = () => {
  const sx = useSx();

  return (
    <Container component="section" sx={sx.container} id={HOME.id}>
      <Toolbar />
      <Suspense fallback={null}>
        <Title />
      </Suspense>
      <SocialMedia sx={sx.socialMedia} />
      <DownloadResumeButton sx={sx.downloadResumeButton} />
    </Container>
  );
};

Landing.whyDidYouRender = true;

export default Landing;