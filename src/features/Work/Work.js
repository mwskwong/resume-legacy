import { Box, Container, Stack } from "@mui/material";

import HexSlice3 from "components/icons/HexSlice3";
import LazyHydrate from "react-lazy-hydration";
import SectionHeader from "components/SectionHeader";
import { WORK } from "constants/nav";
import WorkTimeline from "./WorkTimeline";
import { memo } from "react";
import useSx from "./useWorkSx";

const Work = () => {
  const sx = useSx();

  return (
    <Box sx={sx.root} component="section" id={WORK.id}>
      <LazyHydrate whenVisible>
        <Container>
          <Stack spacing={6}>
            <SectionHeader
              heading="Recent Experiences"
              Icon={HexSlice3}
            />
            <WorkTimeline />
          </Stack>

        </Container>
      </LazyHydrate>
    </Box>
  );
};

Work.whyDidYouRender = true;

export default memo(Work);