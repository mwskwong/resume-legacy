import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Placeholder = ({ sx: sxProp }) => (
  <Box
    component="section"
    sx={{
      height: {
        xs: 923.719,
        sm: 783.500,
        md: 602.719,
        lg: 563,
        xl: 566.594
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