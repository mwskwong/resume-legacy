import { SvgIcon } from "@mui/material";
import useSx from "./useThirdPartyIconSx";

const Menu = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.root} {...props}>
      <g transform="matrix(1.7142857142857142,0,0,1.7142857142857142,0,0)">
        <g>
          <line x1="13.5" y1="2" x2="6" y2="2" />
          <line x1="11" y1="7" x2="3.5" y2="7" />
          <line x1="8.5" y1="12" x2="0.5" y2="12" />
        </g>
      </g>
    </SvgIcon>
  );
};

Menu.muiName = SvgIcon.muiName;
Menu.whyDidYouRender = true;

export default Menu;
