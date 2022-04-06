import { Box, Container, Grid, Stack } from "@mui/material";
import { Suspense, lazy, memo } from "react";

import ArcticOceanFractalPlaceholder from "components/ArcticOceanFractal/Placeholder";
import Courses from "./Courses";
import { EDUCATION } from "constants/nav";
import EducationTimeline from "./EducationTimeline";
import PropTypes from "prop-types";
import SectionHeader from "components/SectionHeader";
import useSx from "./useEducationSx";

const ArcticOceanFractal = lazy(() => import("components/ArcticOceanFractal"));

const Education = ({ sx: sxProp }) => {
  const sx = useSx({ sxProp });

  return (
    <Box sx={sx.root}>
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
                <Box sx={sx.animationContainer}>
                  <Box sx={sx.animationWrapper}>
                    <Suspense fallback={<ArcticOceanFractalPlaceholder />}>
                      <ArcticOceanFractal />
                    </Suspense>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  );
};

Education.propTypes = {
  sx: PropTypes.object
};

Education.whyDidYouRender = true;

export default memo(Education);