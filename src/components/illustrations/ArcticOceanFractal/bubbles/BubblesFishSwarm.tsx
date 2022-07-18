import React, { FC, SVGProps, memo } from "react";

import BubbleFloating from "./BubbleFloating";
import { fishSwarmCircles } from "./pathData";

const BubblesFishSwarm: FC<SVGProps<SVGCircleElement>> = props => (
  <g>
    {fishSwarmCircles.map(({ cx, cy, r }, index) => (
      <BubbleFloating key={`${cx}-${cy}-${r}`} animDelay={index} cx={cx} cy={cy} r={r} {...props} />
    ))}
  </g>
);

if (process.env.NODE_ENV === "development") BubblesFishSwarm.whyDidYouRender = true;

export default memo(BubblesFishSwarm);