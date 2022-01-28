import { Smartphone as FiSmartphone } from "react-feather";
import { SvgIcon } from "@mui/material";

const Phone = props => (
  <SvgIcon
    component={FiSmartphone}
    inheritViewBox
    {...props}
  />
);

Phone.muiName = SvgIcon.muiName;
Phone.whyDidYouRender = true;

export default Phone;
