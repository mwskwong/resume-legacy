import React, { memo } from "react";

import BubbleFloating from "./BubbleFloating";
import { fishSwarmCircles } from "./pathData";

const BubblesFishSwarm = props => (
  <g>
    {fishSwarmCircles.map(({ cx, cy, r }, index) => (
      <BubbleFloating key={`${cx}-${cy}-${r}`} animDelay={index} cx={cx} cy={cy} r={r} {...props} />
    ))}
  </g>
);

BubblesFishSwarm.whyDidYouRender = true;

export default memo(BubblesFishSwarm);