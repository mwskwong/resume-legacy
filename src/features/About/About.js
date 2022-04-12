import { Box, Container, Stack } from "@mui/material";

import { ABOUT } from "constants/nav";
import Message from "./Message";
import Picture from "./Picture";
import PropTypes from "prop-types";
import SectionHeader from "components/SectionHeader";
import { memo } from "react";
import useSx from "./useAboutSx";

// import SkillSet from "./SkillSet";



const About = ({ sx: sxProp }) => {
  const sx = useSx({ sxProp });

  return (
    <Box sx={sx.root} component="section" id={ABOUT.id}>
      <Container>
        <Stack sx={sx.stack} spacing={6}>
          <SectionHeader heading="About Me" />
          <div><Picture /></div>
          <Message />
          {/* <SkillSet /> */}
        </Stack>
      </Container>
    </Box>
  );
};

About.propTypes = {
  sx: PropTypes.object
};

About.whyDidYouRender = true;

export default memo(About);