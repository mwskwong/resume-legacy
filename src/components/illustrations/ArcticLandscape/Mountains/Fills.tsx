import React, { HTMLAttributes } from "react";

import { FC } from "types";
import { fillPaths } from "./pathData";
import { nord8 } from "nord";

const Fills: FC<HTMLAttributes<SVGGElement>> = props => (
  <g fill={nord8} {...props}>
    {fillPaths.map((path, index) => <path key={index} d={path} />)}
  </g>
);

Fills.whyDidYouRender = true;

export default Fills;