import { Box, Typography } from "@mui/material";

import PropTypes from "prop-types";
import useSx from "./useFunFactItemSx";

const FunFactItem = ({ title, value }) => {
  const sx = useSx();

  return (
    <Box sx={sx.root}>
      <Typography component="div" variant="h3" sx={sx.value}>
        {value}
      </Typography>
      <Typography sx={sx.title}>
        {title}
      </Typography>
    </Box>
  );
};

FunFactItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
FunFactItem.whyDidYouRender = true;

export default FunFactItem;
