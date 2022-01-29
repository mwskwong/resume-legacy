import { SvgIcon } from "@mui/material";

const Menu = props => (
  <SvgIcon {...props}>
    <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
    <rect x="3" y="11" width="18" height="2" rx=".95" ry=".95" />
    <rect x="3" y="16" width="18" height="2" rx=".95" ry=".95" />
    <rect x="3" y="6" width="18" height="2" rx=".95" ry=".95" />
  </SvgIcon>
);

Menu.muiName = SvgIcon.muiName;
Menu.whyDidYouRender = true;

export default Menu;
