import React, { FC } from "react";

import Fills from "./Fills";
import Outlines from "./Outlines";
import Peaks from "./Peaks";
import Shades from "./Shades";

const Mountains: FC = () => (
  <>
    <Peaks />
    <Fills />
    <Shades />
    <Outlines />
  </>
);

Mountains.whyDidYouRender = true;

export default Mountains;