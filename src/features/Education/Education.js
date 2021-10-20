import { Box, Container, Stack } from "@mui/material";

import Courses from "./Courses";
import { EDUCATION } from "constants/nav";
import EducationTimeline from "./EducationTimeline";
import HexSlice4 from "components/icons/HexSlice4";
import LazyHydrate from "react-lazy-hydration";
import SectionHeader from "components/SectionHeader";
import { memo } from "react";
import useSx from "./useEducationSx";

const Education = () => {
  const sx = useSx();

  return (
    <Box sx={sx.root} component="section" id={EDUCATION.id}>
      <LazyHydrate whenVisible>
        <Container>
          <Stack spacing={6}>
            <SectionHeader
              heading="Education"
              Icon={HexSlice4}
            />
            <EducationTimeline />
            <Courses />
          </Stack>
        </Container>
      </LazyHydrate>

    </Box>
  );
};

Education.whyDidYouRender = true;

export default memo(Education);