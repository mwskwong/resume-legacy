import { Box, Container } from "@mui/material";

import { EDUCATION } from "constants/nav";
import EducationTimeline from "./EducationTimeline";
import HexSlice4 from "components/icons/HexSlice4";
import SectionHeader from "components/SectionHeader";
import { Stack } from "@mui/material";
import useSx from "./useEducationSx";

const Education = () => {
  const sx = useSx();

  return (
    <Box sx={sx.root} component="section" id={EDUCATION.id}>
      <Container >
        <Stack spacing={5}>
          <SectionHeader
            heading="Education"
            Icon={HexSlice4}
          />
          <EducationTimeline />
        </Stack>
      </Container>
    </Box>
  );
};

Education.whyDidYouRender = true;

export default Education;