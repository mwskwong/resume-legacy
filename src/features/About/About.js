import { Box, Container, Stack } from "@mui/material";

import { ABOUT } from "constants/nav";
import Message from "./Message";
import Picture from "./Picture";
import SectionHeader from "components/SectionHeader";
import SkillSet from "./SkillSet";
import { memo } from "react";
import useSx from "./useAboutSx";

const About = () => {
  const sx = useSx();

  return (
    <Box sx={sx.root} component="section" id={ABOUT.id}>
      <Container>
        <Stack sx={sx.stack} spacing={6}>
          <SectionHeader heading="About Me" />
          <Picture />
          <Message />
          <SkillSet />
        </Stack>
      </Container>
    </Box>

  );
};

About.whyDidYouRender = true;

export default memo(About);