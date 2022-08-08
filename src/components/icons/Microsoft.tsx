import React, { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

import { siMicrosoft } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const Microsoft: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx(sxProp);

  return (
    <SvgIcon sx={sx.simpleIcons} {...props}>
      <path d={siMicrosoft.path} />
    </SvgIcon>
  );
};

Microsoft.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") Microsoft.whyDidYouRender = true;

export default Microsoft;
