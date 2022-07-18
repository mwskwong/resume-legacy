import React, { FC, SVGProps, memo } from "react";

import BubbleGroundHole from "./BubbleGroundHole";
import { groundHoleOverflowCircles } from "./pathData";

const BubblesGroundHoleOverflow: FC<SVGProps<SVGCircleElement>> = props => (
  <g>
    {groundHoleOverflowCircles.map(({ cx, cy, r }, index) => (
      <BubbleGroundHole key={`${cx}-${cy}-${r}`} animDelay={index} cx={cx} cy={cy} r={r} {...props} />
    ))}
  </g>
);

if (process.env.NODE_ENV === "development") BubblesGroundHoleOverflow.whyDidYouRender = true;

export default memo(BubblesGroundHoleOverflow);
