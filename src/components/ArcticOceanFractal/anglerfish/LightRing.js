import { nord4, nord6 } from "brandingTheme/nord";

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const animLightRingGlow = keyframes`
  0% {
    opacity: 0.6;
    fill: ${nord4};
  }

  100% {
    opacity: 0.9;
    fill: ${nord6};
  }
`;

const LightRing = styled.path`
  animation: ${animLightRingGlow} 3s linear infinite alternate;
  transform-style: preserve-3d;
`;

LightRing.whyDidYouRender = true;

export default LightRing;
