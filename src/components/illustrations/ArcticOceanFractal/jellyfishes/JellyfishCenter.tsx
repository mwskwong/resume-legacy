import React, { FC, memo } from "react";
import { centerPaths, centerTentaclePaths } from "./pathData";
import { css, keyframes } from "@emotion/react";

import Jellyfish from "./Jellyfish";

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

const JellyfishCenter: FC = () => (
  <Jellyfish
    bodyAnimation={bodyAnimStyle}
    bodyPaths={centerPaths}
    tentaclePaths={centerTentaclePaths}
    tentaclesAnimation={tentaclesAnimStyle}
  />
);

JellyfishCenter.whyDidYouRender = true;

export default memo(JellyfishCenter);
