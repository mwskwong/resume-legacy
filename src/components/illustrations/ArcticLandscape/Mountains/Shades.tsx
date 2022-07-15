import React, { FC } from "react";
import { nord0, nord1 } from "nord";
import { shadeLinesPath, shadePaths } from "./pathData";

import styled from "@emotion/styled";

const Shade = styled.path`
  opacity: 0.1;
  stroke: ${nord1};
`;

const ShadeLine = styled(Shade)`
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-width: 2;
`;

const Shades: FC = () => (
  <g fill={nord0}>
    <ShadeLine d={shadeLinesPath} />
    {shadePaths.map((path, index) => <Shade key={index} d={path} />)}
  </g>
);

Shades.whyDidYouRender = true;

export default Shades;