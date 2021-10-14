import { Container } from "@mui/material";
import HexSlice3 from "components/icons/HexSlice3";
import SectionHeader from "components/SectionHeader";
import { Stack } from "@mui/material";
import { WORK } from "constants/nav";
import WorkTimeline from "./WorkTimeline";

const Work = () => {
  return (
    <Container component="section" id={WORK.id}>
      <Stack spacing={6}>
        <SectionHeader
          heading="Recent Experiences"
          Icon={HexSlice3}
        />
        <WorkTimeline />
      </Stack>
    </Container>
  );
};

Work.whyDidYouRender = true;

export default Work;