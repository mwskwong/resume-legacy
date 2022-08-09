import { Box, Container } from "@mui/material";
import React, { FC, Suspense, lazy, memo } from "react";

import DownloadResumeButton from "./DownloadResumeButton";
import { HOME } from "constants/nav";
import { SectionProps } from "types";
import SocialMedia from "components/SocialMedia";
import Title from "./Title";
import { useInView } from "react-intersection-observer";
import useSx from "./useHeroSx";

const ArcticLandscape = lazy(() => import("components/illustrations/ArcticLandscape"));
const ArcticLandscapeFallback = () => <Box sx={{ width: "100%", aspectRatio: "624.443 / 278.807" }} />;

const Hero: FC<SectionProps> = ({ sx: sxProp }) => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "500px" });
  const sx = useSx(sxProp);
  const arcticLandscapeFallback = <ArcticLandscapeFallback />;

  return (
    <Container component="section" sx={sx.container} id={HOME.id}>
      <Box ref={ref} sx={sx.animationWrapper}>
        {
          inView
            ? (
              <Suspense fallback={arcticLandscapeFallback}>
                <ArcticLandscape />
              </Suspense>
            )
            : arcticLandscapeFallback
        }
      </Box>
      <Title />
      <SocialMedia sx={sx.socialMedia} />
      <DownloadResumeButton sx={sx.downloadButton} />
    </Container>
  );
};

if (process.env.NODE_ENV === "development") Hero.whyDidYouRender = true;

export default memo(Hero);
