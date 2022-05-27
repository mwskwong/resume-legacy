import { Grid } from "@mui/material";
import React from "react";

const CarouselFallback = () => (
  <Grid
    item
    md={6}
    xs={12}
    height={{ xs: 298, sm: 202, md: 274, lg: 226 }}
  />
);

CarouselFallback.whyDidYouRender = true;

export default CarouselFallback;