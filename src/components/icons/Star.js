import { Star as FiStar } from "react-feather";
import { SvgIcon } from "@mui/material";

const Star = props => (
  <SvgIcon
    component={FiStar}
    inheritViewBox
    {...props}
  />
);

Star.muiName = SvgIcon.muiName;
Star.whyDidYouRender = true;

export default Star;
