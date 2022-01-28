import { SvgIcon } from "@mui/material";
import { memo } from "react";

const Error = props => (
  <SvgIcon {...props}>
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
    <circle cx="12" cy="16" r="1" />
    <path d="M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z" />
  </SvgIcon>
);

Error.muiName = SvgIcon.muiName;
Error.whyDidYouRender = true;

export default memo(Error);
