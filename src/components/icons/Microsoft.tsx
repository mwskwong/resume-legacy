import { SvgIcon, SvgIconProps } from "@mui/material";

import { FC } from "types";
import React from "react";
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
Microsoft.whyDidYouRender = true;

export default Microsoft;
