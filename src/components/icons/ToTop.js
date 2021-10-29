import { SvgIcon } from "@mui/material";
import useSx from "./useThirdPartyIconSx";

const ToTop = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.root} {...props}>
      <g transform="matrix(1.7142857142857142,0,0,1.7142857142857142,0,0)">
        <g>
          <path d="M.5,8.29,6.65,2.15a.48.48,0,0,1,.7,0L13.5,8.29" />
          <line x1="0.5" y1="12" x2="13.5" y2="12" />
        </g>
      </g>
    </SvgIcon>
  );
};

ToTop.muiName = SvgIcon.muiName;
ToTop.whyDidYouRender = true;

export default ToTop;
