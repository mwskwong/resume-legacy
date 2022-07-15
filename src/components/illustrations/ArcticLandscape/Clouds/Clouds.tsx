import React, { Fragment } from "react";

import { FC } from "types";
import Fills from "./Fills";
import Outlines from "./Outlines";

const Clouds: FC = () => (
  <>
    <Fills />
    <Outlines />
  </>
);

Clouds.whyDidYouRender = true;

export default Clouds; 