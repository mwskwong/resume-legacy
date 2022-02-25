import { Box, Container, Grid, Stack } from "@mui/material";
import { Fragment, memo } from "react";

import ArcticOceanFractal from "components/ArcticOceanFractal";
import Courses from "./Courses";
import { EDUCATION } from "constants/nav";
import EducationTimeline from "./EducationTimeline";
import { NoSsr } from "@mui/base";
import SectionHeader from "components/SectionHeader";
import WaveSmooth2 from "../../components/dividers/WaveSmooth2";
import useSx from "./useEducationSx";

const Education = () => {
  const sx = useSx();

  return (
    <Fragment>
      <WaveSmooth2 sx={sx.divider} />
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
                  <Box sx={sx.animationContainer}>
                    <Box sx={sx.animationWrapper}>
                      <ArcticOceanFractal />
                    </Box>
                  </Box>
                </NoSsr>
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Fragment>
  );
};

Education.whyDidYouRender = true;

export default memo(Education);