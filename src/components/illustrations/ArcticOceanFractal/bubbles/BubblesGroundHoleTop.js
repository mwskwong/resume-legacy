import React, { memo } from "react";

import BubbleGroundHole from "./BubbleGroundHole";
import { groundHoleTopCircles } from "./pathData";

const BubblesGroundHoleTop = props => (
  <g>
    {groundHoleTopCircles.map(({ cx, cy, r }, index) => (
      <BubbleGroundHole key={`${cx}-${cy}-${r}`} animDelay={index} cx={cx} cy={cy} r={r} {...props} />
    ))}
  </g>
);

BubblesGroundHoleTop.whyDidYouRender = true;

export default memo(BubblesGroundHoleTop);
