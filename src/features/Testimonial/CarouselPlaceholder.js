import { Box, Grid } from "@mui/material";

const CarouselPlaceholder = () => (
  <Grid item md={6} xs={12}>
    <Box sx={{ height: { xs: 250, sm: 202, md: 226 } }} />
  </Grid>
);

CarouselPlaceholder.whyDidYouRender = true;
export default CarouselPlaceholder;