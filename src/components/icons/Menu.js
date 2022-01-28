import { Menu as FiMenu } from "react-feather";
import { SvgIcon } from "@mui/material";

const Menu = props => (
  <SvgIcon
    component={FiMenu}
    inheritViewBox
    {...props}
  />
);

Menu.muiName = SvgIcon.muiName;
Menu.whyDidYouRender = true;

export default Menu;
