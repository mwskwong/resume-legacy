import { SvgIcon } from "@mui/material";
import { siLinkedin } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const LinkedIn = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.simpleIcons} {...props}>
      <path d={siLinkedin.path} />
    </SvgIcon>
  );
};

LinkedIn.muiName = SvgIcon.muiName;
LinkedIn.whyDidYouRender = true;

export default LinkedIn;
