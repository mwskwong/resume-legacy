import { Box, Container, Grid, Stack } from "@mui/material";

import Carousel from "./Carousel";
import FunFacts from "./FunFacts";
import PropTypes from "prop-types";
import SectionHeader from "components/SectionHeader";
import { TESTIMONIAL } from "constants/nav";
import { memo } from "react";
import useSx from "./useTestimonialSx";

const Testimonial = ({ sx: sxProp }) => {
  const sx = useSx({ sxProp });

  return (
    <Box component="section" id={TESTIMONIAL.id} sx={sx.root}>
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

Testimonial.propTypes = {
  sx: PropTypes.object
};

Testimonial.whyDidYouRender = true;

export default memo(Testimonial);
