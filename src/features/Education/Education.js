import { Box, Container, Grid, Stack } from "@mui/material";

import ArcticOceanFractal from "components/illustrations/ArcticOceanFractal";
import Courses from "./Courses";
import { EDUCATION } from "constants/nav";
import EducationTimeline from "./EducationTimeline";
import PropTypes from "prop-types";
import SectionHeader from "components/SectionHeader";
import { memo } from "react";
import useSx from "./useEducationSx";

const Education = ({ sx: sxProp }) => {
  const sx = useSx({ sxProp });

  return (
    <Box component="section" id={EDUCATION.id} sx={sx.root}>
      <Container>
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
                    <ArcticOceanFractal />
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