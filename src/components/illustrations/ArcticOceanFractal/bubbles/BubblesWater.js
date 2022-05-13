import React, { memo } from "react";

import BubbleFloating from "./BubbleFloating";
import { waterCircles } from "./pathData";

const BubblesWater = props => (
  <g>
    {waterCircles.map(({ cx, cy, r }, index) => (
      <BubbleFloating key={`${cx}-${cy}-${r}`} animDelay={index} cx={cx} cy={cy} r={r} {...props} />
    ))}
  </g>
);

BubblesWater.whyDidYouRender = true;

export default memo(BubblesWater);