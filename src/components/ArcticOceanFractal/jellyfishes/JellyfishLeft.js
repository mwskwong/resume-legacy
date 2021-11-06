import { css, keyframes } from "@emotion/react";
import { leftPaths, leftTentaclePaths } from "./pathData";

import Jellyfish from "./Jellyfish";
import { memo } from "react";

const animTentacleSwing = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, -1.5%, 0); }
`;

const animFloat = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, -8%, 0); }
`;

const bodyAnimStyle = css`
  animation: ${animFloat} 3s ease-in-out infinite alternate;
`;

const tentaclesAnimStyle = css`
  animation: ${animTentacleSwing} 3s linear 1.8s infinite alternate;
`;

const JellyfishLeft = () => (
  <Jellyfish
    bodyAnimation={bodyAnimStyle}
    bodyPaths={leftPaths}
    tentaclePaths={leftTentaclePaths}
    tentaclesAnimation={tentaclesAnimStyle}
  />
);

JellyfishLeft.whyDidYouRender = true;

export default memo(JellyfishLeft);
