import { Check as FiCheck } from "react-feather";
import { SvgIcon } from "@mui/material";

const Success = props => (
  <SvgIcon
    component={FiCheck}
    inheritViewBox
    {...props}
  />
);

Success.muiName = SvgIcon.muiName;
Success.whyDidYouRender = true;

export default Success;
