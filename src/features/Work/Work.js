import { Container, Stack } from "@mui/material";

import HexSlice3 from "components/icons/HexSlice3";
import LazyHydrate from "react-lazy-hydration";
import SectionHeader from "components/SectionHeader";
import { WORK } from "constants/nav";
import WorkTimeline from "./WorkTimeline";
import { memo } from "react";

const Work = () => {

  return (
    <Container component="section" id={WORK.id}>
      <LazyHydrate whenVisible>
        <Stack spacing={6}>
          <SectionHeader
            heading="Recent Experiences"
            Icon={HexSlice3}
          />
          <WorkTimeline />
        </Stack>
      </LazyHydrate>
    </Container>
  );
};

Work.whyDidYouRender = true;

export default memo(Work);