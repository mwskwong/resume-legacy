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

if (process.env.NODE_ENV === "development") Mountains.whyDidYouRender = true;

export default Mountains;