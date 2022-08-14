import { Box, Container, Stack } from "@mui/material";
import React, { FC, Suspense, lazy, memo } from "react";

import SectionHeading from "components/SectionHeading";
import { SectionProps } from "types";
import { WORK } from "constants/nav";
import useSx from "./useSx";

// import WorkTimeline from "./WorkTimeline";

const Certifications = lazy(() => import("./Certifications"));
const CertificationsFallback = () => <Box sx={{ height: 139.97 }} />;

const Work: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);

  return (
    <Box sx={sx.root} component="section" id={WORK.id}>
      <Container>
        <Stack spacing={6}>
          <SectionHeading heading="Experience" />
          {/* <WorkTimeline /> */}
          <Suspense fallback={<CertificationsFallback />}>
            <Certifications />
          </Suspense>
        </Stack>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") Work.whyDidYouRender = true;

export default memo(Work);