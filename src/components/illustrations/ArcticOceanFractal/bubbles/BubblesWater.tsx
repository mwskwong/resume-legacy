import React, { FC, memo, SVGProps } from "react";

import BubbleFloating from "./BubbleFloating";
import { waterCircles } from "./pathData";

const BubblesWater: FC<SVGProps<SVGCircleElement>> = props => (
  <g>
    {waterCircles.map(({ cx, cy, r }, index) => (
      <BubbleFloating key={`${cx}-${cy}-${r}`} animDelay={index} cx={cx} cy={cy} r={r} {...props} />
    ))}
  </g>
);

if (process.env.NODE_ENV === "development") BubblesWater.whyDidYouRender = true;

export default memo(BubblesWater);