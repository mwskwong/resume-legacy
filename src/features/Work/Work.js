import { Box, Container, Stack } from "@mui/material";

import PropTypes from "prop-types";
import SectionHeader from "components/SectionHeader";
import { WORK } from "constants/nav";
import { memo } from "react";
import useSx from "./useWorkSx";

// import WorkTimeline from "./WorkTimeline";



const Work = ({ sx: sxProp }) => {
  const sx = useSx({ sxProp });

  return (
    <Box sx={sx.root} component="section" id={WORK.id}>
      <Container>
        <Stack spacing={6}>
          <SectionHeader heading="Recent Experiences" />
          {/* <WorkTimeline /> */}
        </Stack>
      </Container>
    </Box>
  );
};

Work.propTypes = {
  sx: PropTypes.object
};

Work.whyDidYouRender = true;

export default memo(Work);