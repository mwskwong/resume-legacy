import React, { HTMLAttributes } from "react";

import { FC } from "types";
import { fillPaths } from "./pathData";
import { nord6 } from "nord";

const Fills: FC<HTMLAttributes<SVGGElement>> = props => (
  <g fill={nord6} {...props}>
    {fillPaths.map((path, index) => <path key={index} d={path} />)}
  </g>
);

Fills.whyDidYouRender = true;

export default Fills;