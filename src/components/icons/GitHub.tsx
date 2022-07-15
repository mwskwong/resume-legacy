import { SvgIcon, SvgIconProps } from "@mui/material";

import { FC } from "types";
import React from "react";
import { siGithub } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const GitHub: FC<SvgIconProps> = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.simpleIcons} {...props}>
      <path d={siGithub.path} />
    </SvgIcon>
  );
};

GitHub.muiName = SvgIcon.muiName;
GitHub.whyDidYouRender = true;

export default GitHub;
