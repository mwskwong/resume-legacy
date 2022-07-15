import { SvgIcon, SvgIconProps } from "@mui/material";

import { FC } from "types";
import React from "react";
import { siUdemy } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const Udemy: FC<SvgIconProps> = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.simpleIcons} {...props}>
      <path d={siUdemy.path} />
    </SvgIcon>
  );
};

Udemy.muiName = SvgIcon.muiName;
Udemy.whyDidYouRender = true;

export default Udemy;
