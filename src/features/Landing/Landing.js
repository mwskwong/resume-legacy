import { Container, Stack, Toolbar } from "@mui/material";

import DownloadResumeButton from "./DownloadResumeButton";
import { HOME } from "constants/nav";
import SocialMedia from "components/SocialMedia";
import loadable from "@loadable/component";
import useSx from "./useLandingSx";

const Title = loadable(() => import("./Title"));

const Landing = () => {
  const sx = useSx();

  return (
    <Container component="section" sx={sx.container} id={HOME.id}>
      <Toolbar />
      <Title />
      <Stack spacing={4} sx={sx.stack}>
        <SocialMedia />
        <DownloadResumeButton />
      </Stack>
    </Container>
  );
};

Landing.whyDidYouRender = true;

export default Landing;
