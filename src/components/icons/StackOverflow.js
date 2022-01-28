import { SvgIcon } from "@mui/material";
import { siStackOverflow } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const StackOverflow = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.simpleIcons} {...props}>
      <path d={siStackOverflow.path} />
    </SvgIcon>
  );
};

StackOverflow.muiName = SvgIcon.muiName;
StackOverflow.whyDidYouRender = true;

export default StackOverflow;
