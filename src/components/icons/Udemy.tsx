import React, { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

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
if (process.env.NODE_ENV === "development") Udemy.whyDidYouRender = true;

export default Udemy;
