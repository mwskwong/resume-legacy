import { Container, Grid, Stack } from "@mui/material";

import ArcticOceanFractal from "components/ArcticOceanFractal";
import Courses from "./Courses";
import { EDUCATION } from "constants/nav";
import EducationTimeline from "./EducationTimeline";
import { NoSsr } from "@mui/base";
import SectionHeader from "components/SectionHeader";
import { memo } from "react";
import useSx from "./useEducationSx";

const Education = () => {
  const sx = useSx();

  return (
    <Container component="section" id={EDUCATION.id}>
      <Stack spacing={6}>
        <SectionHeader heading="Education" />
        <EducationTimeline />
        <div>
          <Grid container spacing={6} sx={sx.gridContainer}>
            <Grid item md={6} xs={12}>
              <Courses />
            </Grid>
            <Grid item md={6} xs={12}>
              <NoSsr defer>
                <ArcticOceanFractal />
              </NoSsr>
            </Grid>
          </Grid>
        </div>
      </Stack>
    </Container>
  );
};

Education.whyDidYouRender = true;

export default memo(Education);