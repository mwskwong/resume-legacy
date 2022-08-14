import { Box, Container, Stack } from "@mui/material";
import React, { FC, Suspense, lazy, memo } from "react";

import { EDUCATION } from "constants/nav";
import EducationTimeline from "./EducationTimeline";
import SectionHeading from "components/SectionHeading";
import { SectionProps } from "types";
import useSx from "./useEducationSx";

const Courses = lazy(() => import("./Courses"));
const CoursesFallback = () => <Box sx={{ height: { xs: 2134.47, sm: 1732.72, md: 1172.72 } }} />;

const Education: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);

  return (
    <Box component="section" id={EDUCATION.id} sx={sx.root}>
      <Container>
        <Stack spacing={6}>
          <SectionHeading heading="Education" />
          <div>
            <EducationTimeline />
          </div>
          <Suspense fallback={<CoursesFallback />}>
            <Courses />
          </Suspense>
        </Stack>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") Education.whyDidYouRender = true;

export default memo(Education);