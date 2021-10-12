import { Box, Typography } from "@mui/material";

import PropTypes from "prop-types";
import useSx from "./usePersonalInfoItemSx";

const PersonalInfoItem = ({ Icon, title, value }) => {
  const sx = useSx();

  return (
    <Box sx={sx.root}>
      <Icon fontSize="large" color="action" />
      <Typography sx={sx.title} gutterBottom>
        {title}
      </Typography>
      <Typography sx={sx.value}>
        {value}
      </Typography>
    </Box>
  );
};

PersonalInfoItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.node
};

PersonalInfoItem.whyDidYouRender = true;

export default PersonalInfoItem;
