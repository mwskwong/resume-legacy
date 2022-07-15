/** @jsx jsx */

import { FC } from "react";
import { jsx } from "@emotion/react";
import { outline } from "../styles";
import { outlinePaths } from "./pathData";

const Outlines: FC = () => (
  <g css={outline}>
    {outlinePaths.map((path, index) => <path key={index} d={path} />)}
  </g>
);

Outlines.whyDidYouRender = true;

export default Outlines;