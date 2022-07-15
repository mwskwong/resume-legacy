import { SvgIcon, SvgIconProps } from "@mui/material";

import { FC } from "types";
import React from "react";
import { siLinkedin } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const LinkedIn: FC<SvgIconProps> = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.simpleIcons} {...props}>
      <path d={siLinkedin.path} />
    </SvgIcon>
  );
};

LinkedIn.muiName = SvgIcon.muiName;
LinkedIn.whyDidYouRender = true;

export default LinkedIn;
