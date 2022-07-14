import React, { Fragment } from "react";

import Fill from "./Fill";
import Outlines from "./Outline";

const AuroraBorealis = () => (
  <Fragment>
    <Fill />
    <Outlines />
  </Fragment>
);

AuroraBorealis.whyDidYouRender = true;

export default AuroraBorealis;