import React, { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

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
if (process.env.NODE_ENV === "development") LinkedIn.whyDidYouRender = true;

export default LinkedIn;
