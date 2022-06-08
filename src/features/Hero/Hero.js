import { Box, Container } from "@mui/material";
import React, { Suspense, lazy, memo } from "react";

import ArcticLandscapeFallback from "components/illustrations/ArcticLandscape/Fallback";
import DownloadResumeButton from "./DownloadResumeButton";
import { HOME } from "constants/nav";
import SocialMedia from "components/SocialMedia";
import TitleFallback from "./TitleFallback";
import useSx from "./useHeroSx";

const Title = lazy(() => import("./Title"));
const ArcticLandscape = lazy(() => import("components/illustrations/ArcticLandscape"));

const Hero = () => {
  const sx = useSx();

  return (
    <Container component="section" sx={sx.container} id={HOME.id}>
      <Box sx={sx.animationWrapper}>
        <Suspense fallback={<ArcticLandscapeFallback />}>
          <ArcticLandscape />
        </Suspense>
      </Box>
      <Suspense fallback={<TitleFallback />}>
        <Title />
      </Suspense>
      <SocialMedia sx={sx.socialMedia} />
      <DownloadResumeButton sx={sx.downloadButton} />
    </Container>
  );
};

Hero.whyDidYouRender = true;

export default memo(Hero);
