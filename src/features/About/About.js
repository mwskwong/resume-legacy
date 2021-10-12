import { Box, Container, Stack } from "@mui/material";

import { ABOUT } from "constants/nav";
import HexSlice1 from "components/icons/HexSlice1";
import Message from "./Message";
import Photo from "./Photo";
import SectionHeader from "components/SectionHeader";
// import SkillSet from "./SkillSet";
import useSx from "./useAboutSx";

const About = () => {
  const sx = useSx();

  return (
    <Box sx={sx.root} component="section" d={ABOUT.id}>
      <Container>
        <Stack sx={sx.stack} spacing={5}>
          <SectionHeader
            heading="About Me"
            Icon={HexSlice1}
          />
          <Message />
          <Photo />
          {/* <SkillSet /> */}
        </Stack>
      </Container>
    </Box>

  );
};

About.whyDidYouRender = true;

export default About;