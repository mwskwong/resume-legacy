import { X as FiX } from "react-feather";
import { SvgIcon } from "@mui/material";

const Close = props => (
  <SvgIcon
    component={FiX}
    inheritViewBox
    {...props}
  />
);

Close.muiName = SvgIcon.muiName;
Close.whyDidYouRender = true;

export default Close;
