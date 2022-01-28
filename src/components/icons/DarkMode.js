import { Moon as FiMoon } from "react-feather";
import { SvgIcon } from "@mui/material";

const DarkMode = props => (
  <SvgIcon
    component={FiMoon}
    inheritViewBox
    {...props}
  />
);

DarkMode.muiName = SvgIcon.muiName;
DarkMode.whyDidYouRender = true;

export default DarkMode;
