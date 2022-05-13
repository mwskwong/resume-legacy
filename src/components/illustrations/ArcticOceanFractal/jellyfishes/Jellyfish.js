import React from "react";
import { jellyfishPropTypes } from "../propTypes";
import styled from "@emotion/styled";

const Tentacle = styled.path`
  ${({ tentaclesAnimation }) => tentaclesAnimation};
  animation-play-state: "running"};
  transform-style: preserve-3d;
`;

const Group = styled.g`
  ${({ bodyAnimation }) => bodyAnimation};
  animation-play-state: "running";
  transform-style: preserve-3d;
`;

const Jellyfish = ({ bodyAnimation, bodyPaths, poseTimings, runCSSAnimations, tentaclesAnimation, tentaclePaths }) => (
  <Group bodyAnimation={bodyAnimation} runCSSAnimations={runCSSAnimations} {...poseTimings}>
    {tentaclePaths.map(({ d, fill }) => (
      <Tentacle key={d} d={d} fill={fill} runCSSAnimations={runCSSAnimations} tentaclesAnimation={tentaclesAnimation} />
    ))}
    {bodyPaths.map(({ d, fill }) => (
      <path key={d} d={d} fill={fill} />
    ))}
  </Group>
);

Jellyfish.propTypes = jellyfishPropTypes;
Jellyfish.whyDidYouRender = true;

export default Jellyfish;
