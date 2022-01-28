import { createSvgIcon } from "@mui/material";
import { siOracle } from "simple-icons/icons";

const Oracle = createSvgIcon(
  <path d={siOracle.path} />,
  "Oracle"
);

Oracle.whyDidYouRender = true;

export default Oracle;
