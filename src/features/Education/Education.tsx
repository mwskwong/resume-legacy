import { Box, Container, Grid, Stack } from "@mui/material";
import React, { FC, Suspense, lazy, memo } from "react";

import Courses from "./Courses";
import { EDUCATION } from "constants/nav";
import EducationTimeline from "./EducationTimeline";
import SectionHeading from "components/SectionHeading";
import { SectionProps } from "types";
import { useInView } from "react-intersection-observer";
import useSx from "./useEducationSx";

const ArcticOceanFractal = lazy(() => import("components/illustrations/ArcticOceanFractal"));
const ArcticOceanFractalFallback = () => <Box sx={{ width: "100%", aspectRatio: "800 / 640.66" }} />;

const Education: FC<SectionProps> = ({ sx: sxProp }) => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "500px" });
  const sx = useSx(sxProp);
  const arcticOceanFractalFallback = <ArcticOceanFractalFallback />;

  return (
    <Box component="section" id={EDUCATION.id} sx={sx.root}>
      <Container>
        <Stack spacing={6}>
          <SectionHeading heading="Education" />
          <EducationTimeline />
          <div>
            <Grid container spacing={6} sx={sx.gridContainer}>
              <Grid item md={6} xs={12}>
                <Courses />
              </Grid>
              <Grid item md={6} xs={12}>
                <Box sx={sx.animationContainer}>
                  <Box ref={ref} sx={sx.animationWrapper}>
                    {
                      inView
                        ? (
                          <Suspense fallback={arcticOceanFractalFallback}>
                            <ArcticOceanFractal />
                          </Suspense>
                        )
                        : arcticOceanFractalFallback
                    }
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

if (process.env.NODE_ENV === "development") Education.whyDidYouRender = true;

export default memo(Education);