import { SvgIcon } from "@mui/material";
import { memo } from "react";

const ArrowLeft = props => (
  <SvgIcon {...props}>
    <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" />
  </SvgIcon>
);

ArrowLeft.muiName = SvgIcon.muiName;
ArrowLeft.whyDidYouRender = true;

export default memo(ArrowLeft);
