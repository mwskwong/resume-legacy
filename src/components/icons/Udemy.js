import { createSvgIcon } from "@mui/material";
import { siUdemy } from "simple-icons/icons";

const Udemy = createSvgIcon(
  <path d={siUdemy.path} />,
  "Udemy"
);

Udemy.whyDidYouRender = true;

export default Udemy;
