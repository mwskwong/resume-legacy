import React, { FC, HTMLAttributes, memo } from "react";

import BubbleGroundHole from "./BubbleGroundHole";
import { groundHoleOverflowCircles } from "./pathData";

const BubblesGroundHoleOverflow: FC<HTMLAttributes<SVGCircleElement>> = props => (
  <g>
    {groundHoleOverflowCircles.map(({ cx, cy, r }, index) => (
      <BubbleGroundHole key={`${cx}-${cy}-${r}`} animDelay={index} cx={cx} cy={cy} r={r} {...props} />
    ))}
  </g>
);

BubblesGroundHoleOverflow.whyDidYouRender = true;

export default memo(BubblesGroundHoleOverflow);
