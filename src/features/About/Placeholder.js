import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Placeholder = ({ sx: sxProp }) => (
  <Box
    component="section"
    sx={{
      height: {
        xs: 2540.69,
        sm: 1762.47,
        md: 1657.69,
        lg: 1397.97,
        xl: 1401.56
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