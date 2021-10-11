import { Button, Typography } from "@mui/material";

import { HOME } from "constants/nav";
import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useLogoSx";

const Logo = ({ sx: sxProp, onClick }) => {
  const sx = useSx({ sxProp });

  return (
    <Button color="inherit" sx={sx.root} component="a" href={`#${HOME.id}`} onClick={onClick}>
      <Typography sx={sx.text} variant="h5">
        Matthew
      </Typography>
    </Button>
  );
};

Logo.propTypes = {
  sx: PropTypes.object,
  onClick: PropTypes.func
};

Logo.whyDidYouRender = true;

export default memo(Logo);