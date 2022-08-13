import { Box, Container, Stack } from "@mui/material";
import React, { FC, memo } from "react";

import { ABOUT } from "constants/nav";
import Message from "./Message";
import Picture from "./Picture";
import SectionHeading from "components/SectionHeading";
import { SectionProps } from "types";
import SkillSet from "./SkillSet";
import useSx from "./useAboutSx";

const About: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);

  return (
    <Box sx={sx.root} component="section" id={ABOUT.id}>
      <Container>
        <Stack sx={sx.stack} spacing={6}>
          <SectionHeading heading="About Me" />
          <Picture />
          <Message />
          <SkillSet />
        </Stack>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") About.whyDidYouRender = true;

export default memo(About);