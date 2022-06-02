import React, { memo } from "react";
import { css, keyframes } from "@emotion/react";
import { rightPaths, rightTentaclePaths } from "./pathData";

import Jellyfish from "./Jellyfish";

const animTentacleSwing = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0.25%, -1%, 0); }
`;

const animFloat = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(1.8%, -2%, 0); }
`;
const bodyAnimStyle = css`
  animation: ${animFloat} 5s ease-in-out infinite alternate;
`;

const tentaclesAnimStyle = css`
  animation: ${animTentacleSwing} 5s linear 1.8s infinite alternate;
`;

const JellyfishRight = () => (
  <Jellyfish
    bodyAnimation={bodyAnimStyle}
    bodyPaths={rightPaths}
    tentaclePaths={rightTentaclePaths}
    tentaclesAnimation={tentaclesAnimStyle}
  />
);

JellyfishRight.whyDidYouRender = true;

export default memo(JellyfishRight);
