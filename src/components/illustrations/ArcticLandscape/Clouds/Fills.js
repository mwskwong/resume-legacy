import React from "react";
import { fillPaths } from "./pathData";
import { nord6 } from "nord";

const Fills = props => (
  <g fill={nord6} {...props}>
    {fillPaths.map((path, index) => <path key={index} d={path} />)}
  </g>
);

Fills.whyDIdYouRender = true;

export default Fills;