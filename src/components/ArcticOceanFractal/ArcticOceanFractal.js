import {
  BubblesFishSwarm,
  BubblesGroundHoleCenter,
  BubblesGroundHoleOverflow,
  BubblesGroundHoleTop,
  BubblesWater
} from "./bubbles";
import { JellyfishCenter, JellyfishLeft, JellyfishLeftSmall, JellyfishRight } from "./jellyfishes";

import IllustrationCanvas from "./IllustrationCanvas";
import PropTypes from "prop-types";
import calcPoseTimings from "./calcPoseTimings";
import { motion } from "framer-motion";
import { useState } from "react";

const ArcticOceanFractal = ({ pose, onAnimationComplete }) => {
  const { anglerfish, jellyfish } = calcPoseTimings(3200);
  const [runCssAnimations, setRunCssAnimations] = useState(false);

  const handleAnimationComplete = () => {
    setRunCssAnimations(true);
    if (onAnimationComplete) onAnimationComplete();
  };

  return (
    <motion.svg
      onAnimationComplete={handleAnimationComplete}
      animate={pose}
      viewBox="0 0 800 640.66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <IllustrationCanvas anglerfishProps={anglerfish} />
      <BubblesFishSwarm />
      <BubblesWater />
      <BubblesGroundHoleTop />
      <BubblesGroundHoleCenter />
      <BubblesGroundHoleOverflow />
      <JellyfishLeft poseTimings={jellyfish} runCssAnimations={runCssAnimations} />
      <JellyfishLeftSmall poseTimings={jellyfish} runCssAnimations={runCssAnimations} />
      <JellyfishCenter poseTimings={jellyfish} runCssAnimations={runCssAnimations} />
      <JellyfishRight poseTimings={jellyfish} runCssAnimations={runCssAnimations} />
    </motion.svg>
  );
};

ArcticOceanFractal.propTypes = {
  pose: PropTypes.oneOf(["show", "hide"]).isRequired,
  onAnimationComplete: PropTypes.func
};
ArcticOceanFractal.whyDidYouRender = true;

export default ArcticOceanFractal;