import { Activity as FiActivity } from "react-feather";
import { SvgIcon } from "@mui/material";

const Activity = props => (
  <SvgIcon
    component={FiActivity}
    inheritViewBox
    {...props}
  />
);

Activity.muiName = SvgIcon.muiName;
Activity.whyDidYouRender = true;

export default Activity;
