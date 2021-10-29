import { SvgIcon } from "@mui/material";
import useSx from "./useThirdPartyIconSx";

const Error = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.root} {...props}>
      <g transform="matrix(1.7142857142857142,0,0,1.7142857142857142,0,0)">
        <g>
          <path d="M13,6.5a6,6,0,1,0-9.5,4.87V12.5a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V11.37A6,6,0,0,0,13,6.5Z" />
          <circle cx="4.5" cy="7" r="0.5" />
          <circle cx="9.5" cy="7" r="0.5" />
          <line x1="6" y1="11.5" x2="6" y2="13.5" />
          <line x1="8" y1="11.5" x2="8" y2="13.5" />
        </g>
      </g>
    </SvgIcon>
  );
};

Error.muiName = SvgIcon.muiName;
Error.whyDidYouRender = true;

export default Error;
