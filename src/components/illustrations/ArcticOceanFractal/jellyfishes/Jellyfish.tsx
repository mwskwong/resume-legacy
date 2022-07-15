import React, { FC } from "react";

import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";

type TentacleProps = {
  animation: SerializedStyles,
}

type GProps = {
  animation: SerializedStyles,
}

type JellyfishProps = {
  bodyAnimation: SerializedStyles,
  bodyPaths: {
    d: string,
    fill: string
  }[],
  tentaclesAnimation: SerializedStyles,
  tentaclePaths: {
    d: string,
    fill: string
  }[],
}

const Tentacle = styled.path<TentacleProps>`
  ${({ animation }) => animation};
  animation-play-state: "running"};
  transform-style: preserve-3d;
`;

const G = styled.g<GProps>`
  ${({ animation }) => animation};
  animation-play-state: "running";
  transform-style: preserve-3d;
`;

const Jellyfish: FC<JellyfishProps> = ({ bodyAnimation, bodyPaths, tentaclesAnimation, tentaclePaths }) => (
  <G animation={bodyAnimation}>
    {tentaclePaths.map(({ d, fill }) => (
      <Tentacle key={d} d={d} fill={fill} animation={tentaclesAnimation} />
    ))}
    {bodyPaths.map(({ d, fill }) => (
      <path key={d} d={d} fill={fill} />
    ))}
  </G>
);

Jellyfish.whyDidYouRender = true;

export default Jellyfish;
