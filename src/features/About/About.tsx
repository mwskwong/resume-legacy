import { Box, Container, Stack, SxProps, Theme } from "@mui/material";
import React, { FC, memo } from "react";

import { ABOUT } from "constants/nav";
import Message from "./Message";
import Picture from "./Picture";
import PropTypes from "prop-types";
import SectionHeading from "components/SectionHeading";
import SkillSet from "./SkillSet";
import useSx from "./useAboutSx";

interface AboutProps {
  sx: SxProps<Theme>
}

const About: FC<AboutProps> = ({ sx: sxProp }) => {
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

About.propTypes = {
  sx: PropTypes.object
};

About.whyDidYouRender = true;

export default memo(About);