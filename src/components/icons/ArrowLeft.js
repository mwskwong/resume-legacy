import { SvgIcon } from "@mui/material";
import useSx from "./useThirdPartyIconSx";

const ArrowLeft = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.root} {...props}>
      <g transform="matrix(1.7142857142857142,0,0,1.7142857142857142,0,0)">
        <path d="M10.15.5,4,6.65a.48.48,0,0,0,0,.7l6.15,6.15" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"></path>
      </g>
    </SvgIcon>
  );
};

ArrowLeft.muiName = SvgIcon.muiName;
ArrowLeft.whyDidYouRender = true;

export default ArrowLeft;
