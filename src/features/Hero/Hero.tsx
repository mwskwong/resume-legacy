import { Box, Container } from "@mui/material";
import React, { FC, memo } from "react";

import ArcticLandscape from "components/illustrations/ArcticLandscape";
import DownloadResumeButton from "./DownloadResumeButton";
import { HOME } from "constants/nav";
import { SectionProps } from "types";
import SocialMedia from "components/SocialMedia";
import useSx from "./useHeroSx";

// import Title from "./Title";


const Hero: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);

  return (
    <Container component="section" sx={sx.container} id={HOME.id}>
      <Box sx={sx.animationWrapper}>
        <ArcticLandscape />
      </Box>
      {/* <Title /> */}
      <SocialMedia sx={sx.socialMedia} />
      <DownloadResumeButton sx={sx.downloadButton} />
    </Container>
  );
};

if (process.env.NODE_ENV === "development") Hero.whyDidYouRender = true;

export default memo(Hero);
