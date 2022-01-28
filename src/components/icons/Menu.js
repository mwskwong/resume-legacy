import { Menu as FiMenu } from "react-feather";
import { SvgIcon } from "@mui/material";
import useSx from "./useThirdPartyIconSx";

const Menu = props => {
  const sx = useSx();

  return (
    <SvgIcon
      component={FiMenu}
      inheritViewBox
      sx={sx.root}
      titleAccess="menu"
      {...props}
    />
  );
};

Menu.muiName = SvgIcon.muiName;
Menu.whyDidYouRender = true;

export default Menu;
