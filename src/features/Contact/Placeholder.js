import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Placeholder = ({ sx: sxProp }) => (
  <Box
    component="section"
    sx={{
      height: {
        xs: 1413.5,
        sm: 1320.28,
        md: 877.719,
        lg: 886,
        xl: 889.594
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