import { Box, Container, Grid, Stack } from "@mui/material";
import { Suspense, lazy, memo } from "react";

import FunFacts from "./FunFacts";
import PropTypes from "prop-types";
import SectionHeader from "components/SectionHeader";
import { TESTIMONIAL } from "constants/nav";
import useSx from "./useTestimonialSx";

const Carousel = lazy(() => import("./Carousel"));

const Testimonial = ({ sx: sxProp }) => {
  const sx = useSx({ sxProp });

  return (
    <Box component="section" id={TESTIMONIAL.id} sx={sx.root}>
      <Container>
        <Stack spacing={6}>
          <SectionHeader heading="What People Say" />
          <div>
            <Grid container spacing={6} sx={sx.contentGrid}>
              <Suspense>
                <Carousel />
              </Suspense>
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
