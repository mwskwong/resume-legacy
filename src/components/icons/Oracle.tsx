import React, { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

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
if (process.env.NODE_ENV === "development") Oracle.whyDidYouRender = true;

export default Oracle;
