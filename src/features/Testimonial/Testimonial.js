import { Box, Container, Grid, Stack } from "@mui/material";

import BrandingThemeProvider from "components/BrandingThemeProvider";
import FunFacts from "./FunFacts";
import HexSlice2 from "components/icons/HexSlice2";
import SectionHeader from "components/SectionHeader";
import { TESTIMONIAL } from "constants/nav";
import loadable from "@loadable/component";
import { memo } from "react";
import useSx from "./useTestimonialSx";

const Carousel = loadable(() => import("./Carousel"));

const Testimonial = () => {
  const sx = useSx();

  return (
    <BrandingThemeProvider mode="dark">
      <Box component="section" sx={sx.root} id={TESTIMONIAL.id}>
        <Container>
          <Stack spacing={6}>
            <SectionHeader
              heading="What People Say"
              Icon={HexSlice2}
            />
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
