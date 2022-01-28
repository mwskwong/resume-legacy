import { MapPin as FiMapPin } from "react-feather";
import { SvgIcon } from "@mui/material";

const Location = props => (
  <SvgIcon
    component={FiMapPin}
    inheritViewBox
    {...props}
  />
);

Location.muiName = SvgIcon.muiName;
Location.whyDidYouRender = true;

export default Location;
