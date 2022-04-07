import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Placeholder = ({ sx }) => (
  <Box
    component="section"
    sx={{
      height: { xs: 2340.69, sm: 1479.64, md: 1197.97 },
      ...sx
    }}
  />
);

Placeholder.propTypes = {
  sx: PropTypes.object
};

Placeholder.whyDidYouRender = true;

export default Placeholder;