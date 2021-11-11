import { SvgIcon } from "@mui/material";
import { siMicrosoft } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const Microsoft = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.root} {...props}>
      <path d={siMicrosoft.path} />
    </SvgIcon>
  );
};

Microsoft.muiName = SvgIcon.muiName;
Microsoft.whyDidYouRender = true;

export default Microsoft;
