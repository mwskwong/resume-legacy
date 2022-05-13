import Fill from "./Fill";
import { Fragment } from "react";
import Outlines from "./Outlines";
import Peaks from "./Peaks";
import Shades from "./Shades";

const Mountains = () => (
  <Fragment>
    <Peaks />
    <Fill />
    <Shades />
    <Outlines />
  </Fragment>
);

Mountains.whyDidYouRender = true;

export default Mountains;