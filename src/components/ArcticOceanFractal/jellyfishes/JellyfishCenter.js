import { centerPaths, centerTentaclePaths } from "./pathData";
import { css, keyframes } from "@emotion/react";

import Jellyfish from "./Jellyfish";
import { jellyfishBasePropTypes } from "../shared/propTypes";

const animTentacleSwing = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-0.25%, -1%, 0); }
`;

const animFloat = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-1.5%, -6%, 0); }
`;

const bodyAnimStyle = css`
  animation: ${animFloat} 4s ease-in-out infinite 1.2s alternate;
`;

const tentaclesAnimStyle = css`
  animation: ${animTentacleSwing} 4s linear 3s infinite alternate;
`;

const JellyfishCenter = ({ poseTimings, runCssAnimations }) => (
  <Jellyfish
    bodyAnimation={bodyAnimStyle}
    bodyPaths={centerPaths}
    poseTimings={poseTimings}
    runCssAnimations={runCssAnimations}
    tentaclePaths={centerTentaclePaths}
    tentaclesAnimation={tentaclesAnimStyle}
  />
);

JellyfishCenter.propTypes = jellyfishBasePropTypes;
JellyfishCenter.whyDidYouRender = true;

export default JellyfishCenter;
