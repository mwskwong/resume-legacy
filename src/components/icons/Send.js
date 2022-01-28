import { Send as FiSend } from "react-feather";
import { SvgIcon } from "@mui/material";

const Send = props => (
  <SvgIcon
    component={FiSend}
    inheritViewBox
    {...props}
  />
);

Send.muiName = SvgIcon.muiName;
Send.whyDidYouRender = true;

export default Send;
