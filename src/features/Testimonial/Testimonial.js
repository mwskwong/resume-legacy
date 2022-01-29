import { Box, Container, Grid, Stack } from "@mui/material";

import Carousel from "./Carousel";
import FunFacts from "./FunFacts";
import SectionHeader from "components/SectionHeader";
import { TESTIMONIAL } from "constants/nav";
import { memo } from "react";
import useSx from "./useTestimonialSx";

const Testimonial = () => {
  const sx = useSx();

  return (
    <Box component="section" sx={sx.root} id={TESTIMONIAL.id}>
      <Container>
        <Stack spacing={6}>
          <SectionHeader heading="What People Say" />
          <div>
            <Grid container spacing={6} sx={sx.contentGrid}>
              <Carousel />
              <FunFacts />
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  );
};

Testimonial.whyDidYouRender = true;

export default memo(Testimonial);
