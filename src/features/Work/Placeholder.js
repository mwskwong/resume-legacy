import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Placeholder = ({ sx: sxProp }) => (
  <Box
    component="section"
    sx={{
      height: {
        xs: 2587.62,
        sm: 1967.41,
        md: 2201.17,
        lg: 1993.45,
        xl: 1997.05
      },
      ...sxProp
    }}
  />
);

Placeholder.propTypes = {
  sx: PropTypes.object
};

Placeholder.whyDidYouRender = true;

export default Placeholder;