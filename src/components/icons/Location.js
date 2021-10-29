import { SvgIcon } from "@mui/material";
import useSx from "./useThirdPartyIconSx";

const Location = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.streamline} {...props}>
      <g transform="matrix(1.7142857142857142,0,0,1.7142857142857142,0,0)">
        <g>
          <path d="M11.5,5c0,2.49-4.5,8.5-4.5,8.5S2.5,7.49,2.5,5a4.5,4.5,0,0,1,9,0Z" />
          <circle cx="7" cy="5" r="1.5" />
        </g>
      </g>
    </SvgIcon>
  );
};


Location.muiName = SvgIcon.muiName;
Location.whyDidYouRender = true;

export default Location;
