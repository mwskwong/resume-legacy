import { SvgIcon, SvgIconProps } from "@mui/material";

import { FC } from "types";
import React from "react";
import { siOracle } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const Oracle: FC<SvgIconProps> = props => {
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
