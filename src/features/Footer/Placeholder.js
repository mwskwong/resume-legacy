import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Placeholder = ({ sx: sxProp }) => (
  <Box
    component="footer"
    sx={{
      height: {
        xs: 121,
        sm: 100
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