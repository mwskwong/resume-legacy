import { Box, Container, Grid } from "@mui/material";

import BrandingThemeProvider from "components/BrandingThemeProvider";
import HexSlice5 from "components/icons/HexSlice5";
import SectionHeader from "components/SectionHeader";
import { TESTIMONIAL } from "constants/nav";
import loadable from "@loadable/component";
import useSx from "./useTestimonialSx";

const Carousel = loadable(() => import("./Carousel"));

const Testimonial = () => {
  const sx = useSx();

  return (
    <BrandingThemeProvider mode="dark">
      <Box component="section" sx={sx.root} id={TESTIMONIAL.id}>
        <Container>
          <SectionHeader
            heading="What People Say"
            Icon={HexSlice5}
          />
          <Box sx={sx.contentContainer}>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <Carousel />
              </Grid>
              <Grid item md={6} xs={12}>

              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </BrandingThemeProvider>
  );
};

Testimonial.whyDidYouRender = true;

export default Testimonial;
