import { Box, Container, Unstable_Grid2 as Grid, Stack } from "@mui/material";
import React, { FC, memo } from "react";

import Carousel from "./Carousel";
import FunFacts from "./FunFacts";
import SectionHeading from "components/SectionHeading";
import { SectionProps } from "types";
import { TESTIMONIAL } from "constants/nav";
import useSx from "./useTestimonialSx";

const Testimonial: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);

  return (
    <Box component="section" id={TESTIMONIAL.id} sx={sx.root}>
      <Container>
        <Stack spacing={6}>
          <SectionHeading heading="What People Say" />
          <div>
            <Grid container spacing={6} sx={sx.contentGrid} disableEqualOverflow>
              <Carousel />
              <FunFacts />
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") Testimonial.whyDidYouRender = true;

export default memo(Testimonial);
