import { Box, Button } from "@mui/material";

import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useNavButtonSx";

const NavButton = ({ label, id, active }) => {
  const sx = useSx({ active });

  return (
    <Button color={active ? "primary" : "inherit"} href={`#${id}`}>
      {label}
      <Box component="span" sx={sx.active} />
    </Button>
  );
};

NavButton.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

NavButton.whyDidYouRender = true;

export default memo(NavButton);