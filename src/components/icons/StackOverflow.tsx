import { SvgIcon, SvgIconProps } from "@mui/material";

import { FC } from "types";
import React from "react";
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
StackOverflow.whyDidYouRender = true;

export default StackOverflow;
