import React from "react";
import { SvgIcon } from "@mui/material";
import { siOracle } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const Oracle = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.simpleIcons} {...props}>
      <path d={siOracle.path} />
    </SvgIcon>
  );
};

Oracle.muiName = SvgIcon.muiName;
Oracle.whyDidYouRender = true;

export default Oracle;
