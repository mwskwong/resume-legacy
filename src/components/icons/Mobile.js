import { SvgIcon } from "@mui/material";
import useSx from "./useThirdPartyIconSx";

const Mobile = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.root} {...props}>
      <g transform="matrix(1.7142857142857142,0,0,1.7142857142857142,0,0)"><g>
        <rect x="2" y="0.5" width="10" height="13" rx="1" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"></rect>
        <line x1="6.25" y1="11" x2="7.75" y2="11" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"></line>
      </g></g>
    </SvgIcon>
  );
};

Mobile.muiName = SvgIcon.muiName;
Mobile.whyDidYouRender = true;

export default Mobile;
