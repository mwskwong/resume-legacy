import { ChevronRight as FiChevronRight } from "react-feather";
import { SvgIcon } from "@mui/material";

const ChevronRight = props => (
  <SvgIcon
    component={FiChevronRight}
    inheritViewBox
    {...props}
  />
);

ChevronRight.muiName = SvgIcon.muiName;
ChevronRight.whyDidYouRender = true;

export default ChevronRight;
