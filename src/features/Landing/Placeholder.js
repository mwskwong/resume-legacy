import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Placeholder = () => (
  <Box
    component="section"
    sx={{ minHeight: "100vh" }}
  />
);

Placeholder.propTypes = {
  sx: PropTypes.object
};

Placeholder.whyDidYouRender = true;

export default Placeholder;