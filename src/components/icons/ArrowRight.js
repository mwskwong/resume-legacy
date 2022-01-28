import { SvgIcon } from "@mui/material";
import { memo } from "react";

const ArrowRight = props => (
  <SvgIcon {...props}>
    <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z" />
  </SvgIcon>
);

ArrowRight.muiName = SvgIcon.muiName;
ArrowRight.whyDidYouRender = true;

export default memo(ArrowRight);
