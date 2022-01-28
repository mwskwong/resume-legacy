import { ChevronLeft as FiChevronLeft } from "react-feather";
import { SvgIcon } from "@mui/material";

const ChevronLeft = props => (
  <SvgIcon
    component={FiChevronLeft}
    inheritViewBox
    {...props}
  />
);

ChevronLeft.muiName = SvgIcon.muiName;
ChevronLeft.whyDidYouRender = true;

export default ChevronLeft;
