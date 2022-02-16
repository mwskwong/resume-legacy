import { SvgIcon } from "@mui/material";
import { siUdemy } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const Udemy = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.simpleIcons} {...props}>
      <path d={siUdemy.path} />
    </SvgIcon>
  );
};

Udemy.muiName = SvgIcon.muiName;
Udemy.whyDidYouRender = true;

export default Udemy;
