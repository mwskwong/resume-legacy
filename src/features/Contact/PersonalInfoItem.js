import { Stack, Typography } from "@mui/material";

import PropTypes from "prop-types";
import useSx from "./usePersonalInfoItemSx";

const PersonalInfoItem = ({ Icon, title, value }) => {
  const sx = useSx();

  return (
    <Stack sx={sx.root} spacing={2}>
      <Icon fontSize="large" color="action" />
      <Stack spacing={.5}>
        <Typography sx={sx.title}>
          {title}
        </Typography>
        <Typography sx={sx.value}>
          {value}
        </Typography>
      </Stack>
    </Stack>
  );
};

PersonalInfoItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.node
};

PersonalInfoItem.whyDidYouRender = true;

export default PersonalInfoItem;
