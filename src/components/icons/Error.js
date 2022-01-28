import { AlertCircle as FiAlertCircle } from "react-feather";
import { SvgIcon } from "@mui/material";

const Error = props => (
  <SvgIcon
    component={FiAlertCircle}
    inheritViewBox
    {...props}
  />
);

Error.muiName = SvgIcon.muiName;
Error.whyDidYouRender = true;

export default Error;
