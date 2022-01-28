import { Mail as FiMail } from "react-feather";
import { SvgIcon } from "@mui/material";

const Email = props => (
  <SvgIcon
    component={FiMail}
    inheritViewBox
    {...props}
  />
);

Email.muiName = SvgIcon.muiName;
Email.whyDidYouRender = true;

export default Email;
