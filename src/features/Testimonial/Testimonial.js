import { Box, Container, Grid, Stack } from "@mui/material";

import BrandingThemeProvider from "components/BrandingThemeProvider";
import Carousel from "./Carousel";
import FunFacts from "./FunFacts";
import SectionHeader from "components/SectionHeader";
import { TESTIMONIAL } from "constants/nav";
import { memo } from "react";
import useSx from "./useTestimonialSx";

const Testimonial = () => {
  const sx = useSx();

  return (
    <BrandingThemeProvider mode="dark">
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
    </BrandingThemeProvider>
  );
};

Testimonial.whyDidYouRender = true;

export default memo(Testimonial);
