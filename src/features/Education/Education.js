import { Container, Grid, Stack } from "@mui/material";

import Courses from "./Courses";
import { EDUCATION } from "constants/nav";
import EducationTimeline from "./EducationTimeline";
import HexSlice4 from "components/icons/HexSlice4";
import LazyHydrate from "react-lazy-hydration";
import SectionHeader from "components/SectionHeader";
import loadable from "@loadable/component";
import { memo } from "react";
import useSx from "./useEducationSx";

const ArcticOceanFractal = loadable(() => import("components/ArcticOceanFractal"));

const Education = () => {
  const sx = useSx();

  return (
    <Container component="section" id={EDUCATION.id}>
      <LazyHydrate whenVisible>
        <Stack spacing={6}>
          <SectionHeader
            heading="Education"
            Icon={HexSlice4}
          />
          <EducationTimeline />
          <div>
            <Grid container spacing={6} sx={sx.gridContainer}>
              <Grid item md={6} xs={12}>
                <Courses />
              </Grid>
              <Grid item md={6} xs={12}>
                <ArcticOceanFractal />
              </Grid>
            </Grid>
          </div>
        </Stack>
      </LazyHydrate>
    </Container>
  );
};

Education.whyDidYouRender = true;

export default memo(Education);