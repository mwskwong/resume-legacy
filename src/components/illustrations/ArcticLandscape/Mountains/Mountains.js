import React, { Fragment } from "react";

import Fills from "./Fills";
import Outlines from "./Outlines";
import Peaks from "./Peaks";
import Shades from "./Shades";

const Mountains = () => (
  <Fragment>
    <Peaks />
    <Fills />
    <Shades />
    <Outlines />
  </Fragment>
);

Mountains.whyDidYouRender = true;

export default Mountains;