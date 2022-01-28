import { SvgIcon } from "@mui/material";
import { memo } from "react";

const ArrowUp = props => (
  <SvgIcon {...props}>
    <path d="M18 15a1 1 0 0 1-.64-.23L12 10.29l-5.37 4.32a1 1 0 0 1-1.41-.15 1 1 0 0 1 .15-1.41l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .13 1.41A1 1 0 0 1 18 15z" />
  </SvgIcon>
);

ArrowUp.muiName = SvgIcon.muiName;
ArrowUp.whyDidYouRender = true;

export default memo(ArrowUp);
