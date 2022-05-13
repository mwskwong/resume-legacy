import React from "react";
import { outline } from "../styles";
import { outlinePaths } from "./pathData";

const Outlines = () => (
  <g css={outline}>
    {outlinePaths.map((path, index) => <path key={index} d={path} />)}
  </g>
);

Outlines.whyDidYouRender = true;

export default Outlines;