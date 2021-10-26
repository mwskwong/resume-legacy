import { Box, Container, Grid, Stack } from "@mui/material";

import Courses from "./Courses";
import { EDUCATION } from "constants/nav";
import EducationTimeline from "./EducationTimeline";
import HexSlice4 from "components/icons/HexSlice4";
import SectionHeader from "components/SectionHeader";
import loadable from "@loadable/component";
import { memo } from "react";
import { useInView } from "react-intersection-observer";
import useSx from "./useEducationSx";

const ArcticOceanFractal = loadable(() => import("arctic-ocean-fractal"));

const Education = () => {
  const sx = useSx();
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Box sx={sx.root} component="section" id={EDUCATION.id}>
      <Container>
        <Stack spacing={6}>
          <SectionHeader
            heading="Education"
            Icon={HexSlice4}
          />
          <EducationTimeline />
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Courses />
            </Grid>
            <Grid item md={6} xs={12}>
              <div ref={ref}>
                <ArcticOceanFractal pose={inView ? "show" : "hide"} />
              </div>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

Education.whyDidYouRender = true;

export default memo(Education);