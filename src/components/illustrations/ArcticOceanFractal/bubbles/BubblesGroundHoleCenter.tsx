import React, { FC, SVGProps, memo } from "react";

import BubbleGroundHole from "./BubbleGroundHole";
import { groundHoleCenterCircles } from "./pathData";

const BubblesGroundHoleCenter: FC<SVGProps<SVGCircleElement>> = props => (
  <g>
    {groundHoleCenterCircles.map(({ cx, cy, r }, index) => (
      <BubbleGroundHole key={`${cx}-${cy}-${r}`} animDelay={index} cx={cx} cy={cy} r={r} {...props} />
    ))}
  </g>
);

if (process.env.NODE_ENV === "development") BubblesGroundHoleCenter.whyDidYouRender = true;

export default memo(BubblesGroundHoleCenter);
