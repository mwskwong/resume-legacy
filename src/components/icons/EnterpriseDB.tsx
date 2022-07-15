import React, { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

import { siEnterprisedb } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const EnterpriseDB: FC<SvgIconProps> = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.simpleIcons} {...props}>
      <path d={siEnterprisedb.path} />
    </SvgIcon>
  );
};

EnterpriseDB.muiName = SvgIcon.muiName;
EnterpriseDB.whyDidYouRender = true;

export default EnterpriseDB;
