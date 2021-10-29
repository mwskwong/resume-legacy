import { SvgIcon } from "@mui/material";
import useSx from "./useThirdPartyIconSx";

const Email = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.root} {...props}>
      <g transform="matrix(1.7142857142857142,0,0,1.7142857142857142,0,0)">
        <path d="M0.500 1.750 L13.500 1.750 L13.500 12.250 L0.500 12.250 Z" />
        <path d="M.5,3.015,6.355,7.956a1,1,0,0,0,1.29,0L13.5,3.015" />
      </g>
    </SvgIcon>
  );
};


Email.muiName = SvgIcon.muiName;
Email.whyDidYouRender = true;

export default Email;
