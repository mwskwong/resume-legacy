import { SvgIcon } from "@mui/material";
import useSx from "./useThirdPartyIconSx";

const ArrowRight = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.root} {...props}>
      <g transform="matrix(1.7142857142857142,0,0,1.7142857142857142,0,0)">
        <path d="M3.85.5,10,6.65a.48.48,0,0,1,0,.7L3.85,13.5" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"></path>
      </g>
    </SvgIcon>
  );
};

ArrowRight.muiName = SvgIcon.muiName;
ArrowRight.whyDidYouRender = true;

export default ArrowRight;
