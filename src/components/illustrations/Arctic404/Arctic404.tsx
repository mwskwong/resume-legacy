import React, { FC } from "react";

import CloudBottom from "./CloudBottom";
import CloudTop from "./CloudTop";
import NightSkyCanvas from "./NightSkyCanvas";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const animFloating = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(4%, 0, 0); }
`;

const StyledCloudBottom = styled(CloudBottom)`
  animation: ${animFloating} 4000ms ease-in-out infinite alternate;
`;

const StyledCloudTop = styled(CloudTop)`
  animation: ${animFloating} 4000ms ease-in-out infinite alternate 1200ms;
`;

const Animation404: FC = () => (
  <svg viewBox="0 0 512.5 372.642" xmlns="http://www.w3.org/2000/svg" width="100%">
    <NightSkyCanvas />
    <StyledCloudTop />
    <StyledCloudBottom />
  </svg>
);

Animation404.whyDidYouRender = true;

export default Animation404;