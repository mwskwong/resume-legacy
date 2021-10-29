import { SvgIcon } from "@mui/material";
import useSx from "./useThirdPartyIconSx";

const Download = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.root} {...props}>
      <g transform="matrix(1.7142857142857142,0,0,1.7142857142857142,0,0)"><g>
        <path d="M.5,10.5v1a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2v-1" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"></path>
        <polyline points="4 6 7 9.5 10 6" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"></polyline>
        <line x1="7" y1="9.5" x2="7" y2="0.5" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"></line>
      </g></g>
    </SvgIcon>
  );
};

Download.muiName = SvgIcon.muiName;
Download.whyDidYouRender = true;

export default Download;
