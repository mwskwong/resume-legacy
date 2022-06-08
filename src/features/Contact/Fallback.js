import { Box } from "@mui/material";
import { CONTACT } from "constants/nav";
import React from "react";

const CarouselFallback = () => (
  <Box component="section" id={CONTACT.id}>
    <Box sx={{ height: { xs: 1213.500, sm: 1120.280, md: 677.719, lg: 686 } }} />
  </Box>
);

CarouselFallback.whyDidYouRender = true;

export default CarouselFallback;