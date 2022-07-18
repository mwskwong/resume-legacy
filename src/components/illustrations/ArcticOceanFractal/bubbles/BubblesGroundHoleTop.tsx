import React, { FC, SVGProps, memo } from "react";

import BubbleGroundHole from "./BubbleGroundHole";
import { groundHoleTopCircles } from "./pathData";

const BubblesGroundHoleTop: FC<SVGProps<SVGCircleElement>> = props => (
  <g>
    {groundHoleTopCircles.map(({ cx, cy, r }, index) => (
      <BubbleGroundHole key={`${cx}-${cy}-${r}`} animDelay={index} cx={cx} cy={cy} r={r} {...props} />
    ))}
  </g>
);

if (process.env.NODE_ENV === "development") BubblesGroundHoleTop.whyDidYouRender = true;

export default memo(BubblesGroundHoleTop);
