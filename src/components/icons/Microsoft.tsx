import React, { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

import { siMicrosoft } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const Microsoft: FC<SvgIconProps> = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.simpleIcons} {...props}>
      <path d={siMicrosoft.path} />
    </SvgIcon>
  );
};

Microsoft.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") Microsoft.whyDidYouRender = true;

export default Microsoft;
