import { outline } from "../styles";
import { outlinePaths } from "./pathData";

const Outlines = () => (
  <g className={outline}>
    {outlinePaths.map((path, index) => <path key={index} d={path} />)}
  </g>
);

Outlines.whyDidYouRender = true;

export default Outlines;