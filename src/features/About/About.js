import { Box, Container, Stack } from "@mui/material";

import { ABOUT } from "constants/nav";
import HexSlice1 from "components/icons/HexSlice1";
import LazyHydrate from "react-lazy-hydration";
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
      <LazyHydrate whenVisible>
        <Container>
          <Stack sx={sx.stack} spacing={6}>
            <SectionHeader
              heading="About Me"
              Icon={HexSlice1}
            />
            <Picture />
            <Message />
            <SkillSet />
          </Stack>
        </Container>
      </LazyHydrate>
    </Box>

  );
};

About.whyDidYouRender = true;

export default memo(About);