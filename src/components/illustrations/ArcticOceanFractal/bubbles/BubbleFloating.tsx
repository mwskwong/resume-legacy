import { keyframes } from "@emotion/react";
import { nord3 } from "nord";
import styled from "@emotion/styled";

type BubbleFloatingProps = {
  animDelay: number
}

const animBubbleFloat = keyframes`
  0% { opacity: 0; }
  20% { opacity: 1; }
  100% { opacity: 0; }
`;

const BubbleFloating = styled.circle<BubbleFloatingProps>`
  animation: ${animBubbleFloat} 5s linear ${({ animDelay }) => animDelay}s infinite;
  fill: ${nord3};
  opacity: 0;
`;

BubbleFloating.whyDidYouRender = true;

export default BubbleFloating;
