import { Box, Container, Grid, Stack } from "@mui/material";
import { Fragment, memo } from "react";

import Carousel from "./Carousel";
import FunFacts from "./FunFacts";
import SectionHeader from "components/SectionHeader";
import { TESTIMONIAL } from "constants/nav";
import WaveRough from "components/dividers/WaveRough";
import useSx from "./useTestimonialSx";

const Testimonial = () => {
  const sx = useSx();

  return (
    <Fragment>
      <WaveRough sx={sx.divider} />
      <Box component="section" id={TESTIMONIAL.id}>
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
    </Fragment>
  );
};

Testimonial.whyDidYouRender = true;

export default memo(Testimonial);
