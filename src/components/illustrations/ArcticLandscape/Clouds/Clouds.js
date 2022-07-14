import React, { Fragment } from "react";

import Fills from "./Fills";
import Outlines from "./Outlines";

const Clouds = () => (
  <Fragment>
    <Fills />
    <Outlines />
  </Fragment>
);

Clouds.whyDidYouRender = true;

export default Clouds; 