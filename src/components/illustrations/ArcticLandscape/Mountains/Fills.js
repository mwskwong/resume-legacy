import { fillPaths } from "./pathData";
import { nord8 } from "nord";

const Fills = props => (
  <g fill={nord8} {...props}>
    {fillPaths.map((path, index) => <path key={index} d={path} />)}
  </g>
);

Fills.whyDIdYouRender = true;

export default Fills;