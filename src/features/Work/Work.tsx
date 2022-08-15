import { Box, Container, Stack } from "@mui/material";
import React, { FC, Suspense, lazy, memo } from "react";

import Certifications from "./Certifications";
import SectionHeading from "components/SectionHeading";
import { SectionProps } from "types";
import { WORK } from "constants/nav";
import useSx from "./useSx";

const WorkTimeline = lazy(() => import("./WorkTimeline"));
const WorkTimelineFallback = () => <Box sx={{ height: { xs: 3010.69, sm: 2062.69, md: 1979.34, lg: 1835.34 } }} />;

const Work: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);

  return (
    <Box sx={sx.root} component="section" id={WORK.id}>
      <Container>
        <Stack spacing={6}>
          <SectionHeading heading="Experience" />
          <Suspense fallback={<WorkTimelineFallback />}>
            <WorkTimeline />
          </Suspense>
          <Certifications />
        </Stack>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") Work.whyDidYouRender = true;

export default memo(Work);