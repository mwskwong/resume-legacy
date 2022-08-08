import React, { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

import { siMongodb } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const MongoDB: FC<SvgIconProps> = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.simpleIcons} {...props}>
      <path d={siMongodb.path} />
    </SvgIcon>
  );
};

MongoDB.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") MongoDB.whyDidYouRender = true;

export default MongoDB;
