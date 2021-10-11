import { Box, Button } from "@mui/material";

import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useNavButtonSx";

const NavButton = ({ label, id, active }) => {
  const sx = useSx({ active });

  return (
    <Button color="inherit" sx={sx.root} component="a" href={`#${id}`}>
      {label}
      {
        active
          ? <Box component="span" sx={sx.active} />
          : null
      }
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