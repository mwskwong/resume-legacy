import { SvgIcon } from "@mui/material";
import useSx from "./useThirdPartyIconSx";

const Send = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.root} {...props}>
      <g transform="matrix(1.7142857142857142,0,0,1.7142857142857142,0,0)">
        <path d="M5.818,10.992,8,13.171a1.124,1.124,0,0,0,1.861-.439L13.442,1.979A1.123,1.123,0,0,0,12.021.558L1.268,4.142A1.124,1.124,0,0,0,.829,6L3.57,8.744l-.093,3.465Z" />
        <path d="M13.121 0.782L3.57 8.744" />
      </g>
    </SvgIcon>
  );
};

Send.muiName = SvgIcon.muiName;
Send.whyDidYouRender = true;

export default Send;
