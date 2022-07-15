import {
  BubblesFishSwarm,
  BubblesGroundHoleCenter,
  BubblesGroundHoleOverflow,
  BubblesGroundHoleTop,
  BubblesWater
} from "./bubbles";
import { JellyfishCenter, JellyfishLeft, JellyfishLeftSmall, JellyfishRight } from "./jellyfishes";
import React, { FC } from "react";

import IllustrationCanvas from "./IllustrationCanvas";

const ArcticOceanFractal: FC = () => (
  <svg viewBox="0 0 800 640.66" xmlns="http://www.w3.org/2000/svg">
    <IllustrationCanvas />
    <BubblesFishSwarm />
    <BubblesWater />
    <BubblesGroundHoleTop />
    <BubblesGroundHoleCenter />
    <BubblesGroundHoleOverflow />
    <JellyfishLeft />
    <JellyfishLeftSmall />
    <JellyfishCenter />
    <JellyfishRight />
  </svg>
);

ArcticOceanFractal.whyDidYouRender = true;

export default ArcticOceanFractal;