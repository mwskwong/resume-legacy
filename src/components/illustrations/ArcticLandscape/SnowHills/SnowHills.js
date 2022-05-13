import { outline } from "../styles";
import { outlinePaths } from "./pathData";

const SnowHills = () => (
  <g className={outline}>
    {outlinePaths.map((path, index) => <path key={index} d={path} />)}
  </g>
);

SnowHills.whyDidYouRender = true;

export default SnowHills;