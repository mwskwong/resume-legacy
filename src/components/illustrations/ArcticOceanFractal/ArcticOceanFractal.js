import {
  BubblesFishSwarm,
  BubblesGroundHoleCenter,
  BubblesGroundHoleOverflow,
  BubblesGroundHoleTop,
  BubblesWater
} from "./bubbles";
import { JellyfishCenter, JellyfishLeft, JellyfishLeftSmall, JellyfishRight } from "./jellyfishes";

import IllustrationCanvas from "./IllustrationCanvas";
import React from "react";

const ArcticOceanFractal = () => {
  return (
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
};

ArcticOceanFractal.whyDidYouRender = true;

export default ArcticOceanFractal;