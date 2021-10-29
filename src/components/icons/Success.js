import { SvgIcon } from "@mui/material";
import useSx from "./useThirdPartyIconSx";

const Success = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.root} {...props}>
      <g transform="matrix(1.7142857142857142,0,0,1.7142857142857142,0,0)">
        <path d="M.5,8.55l2.73,3.51a1,1,0,0,0,.78.39,1,1,0,0,0,.78-.36L13.5,1.55" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"></path>
      </g>
    </SvgIcon>
  );
};

Success.muiName = SvgIcon.muiName;
Success.whyDidYouRender = true;

export default Success;
