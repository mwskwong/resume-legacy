import React, { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

import { siStackoverflow } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const StackOverflow: FC<SvgIconProps> = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.simpleIcons} {...props}>
      <path d={siStackoverflow.path} />
    </SvgIcon>
  );
};

StackOverflow.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") StackOverflow.whyDidYouRender = true;

export default StackOverflow;
