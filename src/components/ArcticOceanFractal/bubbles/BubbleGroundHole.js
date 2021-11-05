import { keyframes } from "@emotion/react";
import { nord4 } from "brandingTheme/nord";
import styled from "@emotion/styled";

const animBubbleRiseUp = keyframes`
  0% {
    transform: translate3d(0.2%, 0, 0);
    opacity: 0;
  }

  13% {
    transform: translate3d(0.4%, -1%, 0);
    opacity: 1;
  }

  20% { transform: translate3d(0.6%, -2%, 0) }
  30% { transform: translate3d(0, -3%, 0); }
  40% { transform: translate3d(0.4%, -4%, 0); }
  50% { transform: translate3d(0.5%, -5%, 0); }
  60% { transform: translate3d(0.6%, -6%, 0); }
  70% {
    transform: translate3d(0.7%, -7%, 0);
    opacity: 0.4;
  }

  80% {
    transform: translate3d(0.4%, -7%, 0);
    opacity: 0.2;
  }

  90%,
  100% {
    transform: translate3d(0.2%, -8%, 0);
    opacity: 0;
  }
`;

const BubbleGroundHole = styled.circle`
  animation: ${animBubbleRiseUp} 5s linear ${({ animDelay }) => animDelay}s infinite;
  fill: ${nord4};
  opacity: 0;
`;

BubbleGroundHole.whyDidYouRender = true;

export default BubbleGroundHole;
