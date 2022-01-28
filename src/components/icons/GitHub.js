import { SvgIcon } from "@mui/material";
import { siGithub } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const GitHub = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.simpleIcons} {...props}>
      <path d={siGithub.path} />
    </SvgIcon>
  );
};

GitHub.muiName = SvgIcon.muiName;
GitHub.whyDidYouRender = true;

export default GitHub;
