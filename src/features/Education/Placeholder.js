import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Placeholder = ({ sx: sxProp }) => (
  <Box
    component="section"
    sx={{
      height: {
        xs: 1960.02,
        sm: 1718.88,
        md: 1534.97,
        lg: 1267.25,
        xl: 1270.84
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