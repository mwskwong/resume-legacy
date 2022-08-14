import { Box, Container, Stack } from "@mui/material";
import React, { FC, memo } from "react";

import Certification from "./Certification";
import SectionHeading from "components/SectionHeading";
import { SectionProps } from "types";
import { WORK } from "constants/nav";
import useSx from "./useSx";

// import WorkTimeline from "./WorkTimeline";


const Work: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);

  return (
    <Box sx={sx.root} component="section" id={WORK.id}>
      <Container>
        <Stack spacing={6}>
          <SectionHeading heading="Experience" />
          {/* <WorkTimeline /> */}
          <Certification />
        </Stack>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") Work.whyDidYouRender = true;

export default memo(Work);