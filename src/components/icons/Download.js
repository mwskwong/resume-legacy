import { DownloadCloud as FiDownloadCloud } from "react-feather";
import { SvgIcon } from "@mui/material";

const Download = props => (
  <SvgIcon
    component={FiDownloadCloud}
    inheritViewBox
    {...props}
  />
);

Download.muiName = SvgIcon.muiName;
Download.whyDidYouRender = true;

export default Download;
