import { Box, Container, Stack } from "@mui/material";

import SectionHeader from "components/SectionHeader";
import { WORK } from "constants/nav";
import WorkTimeline from "./WorkTimeline";
import { memo } from "react";
import useSx from "./useWorkSx";

const Work = () => {
  const sx = useSx();

  return (
    <Box sx={sx.root} component="section" id={WORK.id}>
      <Container>
        <Stack spacing={6}>
          <SectionHeader heading="Recent Experiences" />
          <WorkTimeline />
        </Stack>
      </Container>
    </Box>
  );
};

Work.whyDidYouRender = true;

export default memo(Work);