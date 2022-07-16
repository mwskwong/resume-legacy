import { Box, Container, Stack } from "@mui/material";
import React, { FC, memo } from "react";

import PropTypes from "prop-types";
import SectionHeading from "components/SectionHeading";
import { SectionProps } from "types";
import { WORK } from "constants/nav";
import WorkTimeline from "./WorkTimeline";
import useSx from "./useSx";

const Work: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);

  return (
    <Box sx={sx.root} component="section" id={WORK.id}>
      <Container>
        <Stack spacing={6}>
          <SectionHeading heading="Recent Experiences" />
          <WorkTimeline />
        </Stack>
      </Container>
    </Box>
  );
};

Work.propTypes = {
  sx: PropTypes.object
};

Work.whyDidYouRender = true;

export default memo(Work);