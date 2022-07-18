import React, { FC, SVGProps } from "react";

import { fillPaths } from "./pathData";
import { nord6 } from "nord";

const Fills: FC<SVGProps<SVGGElement>> = props => (
  <g fill={nord6} {...props}>
    {fillPaths.map((path, index) => <path key={index} d={path} />)}
  </g>
);

if (process.env.NODE_ENV === "development") Fills.whyDidYouRender = true;

export default Fills;