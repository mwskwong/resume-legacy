import { Sun as FiSun } from "react-feather";
import { SvgIcon } from "@mui/material";

const LightMode = props => (
  <SvgIcon
    component={FiSun}
    inheritViewBox
    {...props}
  />
);

LightMode.muiName = SvgIcon.muiName;
LightMode.whyDidYouRender = true;

export default LightMode;
