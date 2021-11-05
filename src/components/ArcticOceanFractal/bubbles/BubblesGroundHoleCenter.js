import BubbleGroundHole from "./BubbleGroundHole";
import { groundHoleCenterCircles } from "./pathData";
import { memo } from "react";

const BubblesGroundHoleCenter = props => (
  <g>
    {groundHoleCenterCircles.map(({ cx, cy, r }, index) => (
      <BubbleGroundHole key={`${cx}-${cy}-${r}`} animDelay={index} cx={cx} cy={cy} r={r} {...props} />
    ))}
  </g>
);

BubblesGroundHoleCenter.whyDidYouRender = true;

export default memo(BubblesGroundHoleCenter);
