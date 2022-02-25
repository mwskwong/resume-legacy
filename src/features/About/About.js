import { Box, Container, Stack } from "@mui/material";
import { Fragment, memo } from "react";

import { ABOUT } from "constants/nav";
import Message from "./Message";
import Picture from "./Picture";
import SectionHeader from "components/SectionHeader";
import SkillSet from "./SkillSet";
import WaveSmooth from "components/dividers/WaveSmooth";
import useSx from "./useAboutSx";

const About = () => {
  const sx = useSx();

  return (
    <Fragment>
      <WaveSmooth sx={sx.divider} />
      <Box sx={sx.root} component="section" id={ABOUT.id}>
        <Container>
          <Stack sx={sx.stack} spacing={6}>
            <SectionHeader heading="About Me" />
            {/* Wrap in div to prevent layout shift */}
            <div><Picture /></div>
            <Message />
            <SkillSet />
          </Stack>
        </Container>
      </Box>
    </Fragment>
  );
};

About.whyDidYouRender = true;

export default memo(About);