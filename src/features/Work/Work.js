import { Box, Container, Stack } from "@mui/material";
import { Fragment, memo } from "react";

import SectionHeader from "components/SectionHeader";
import { WORK } from "constants/nav";
import WaveSmoothFlat from "components/dividers/WaveSmoothFlat";
import WorkTimeline from "./WorkTimeline";
import useSx from "./useWorkSx";

const Work = () => {
  const sx = useSx();

  return (
    <Fragment>
      <WaveSmoothFlat sx={sx.divider} />
      <Box sx={sx.root} component="section" id={WORK.id}>
        <Container>
          <Stack spacing={6}>
            <SectionHeader heading="Recent Experiences" />
            <WorkTimeline />
          </Stack>
        </Container>
      </Box>
    </Fragment>
  );
};

Work.whyDidYouRender = true;

export default memo(Work);