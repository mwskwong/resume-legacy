import { ChevronsUp as FiChevronsUp } from "react-feather";
import { SvgIcon } from "@mui/material";

const BackToTop = props => (
  <SvgIcon
    component={FiChevronsUp}
    inheritViewBox
    {...props}
  />
);

BackToTop.muiName = SvgIcon.muiName;
BackToTop.whyDidYouRender = true;

export default BackToTop;
