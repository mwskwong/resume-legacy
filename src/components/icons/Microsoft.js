import { createSvgIcon } from "@mui/material";
import { siMicrosoft } from "simple-icons/icons";

const Microsoft = createSvgIcon(
  <path d={siMicrosoft.path} />,
  "Microsoft"
);

Microsoft.whyDidYouRender = true;

export default Microsoft;
