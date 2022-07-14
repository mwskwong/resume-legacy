import PropTypes from "prop-types";
import React from "react";
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

const Jellyfish = ({ bodyAnimation, bodyPaths, tentaclesAnimation, tentaclePaths }) => (
  <Group bodyAnimation={bodyAnimation}>
    {tentaclePaths.map(({ d, fill }) => (
      <Tentacle key={d} d={d} fill={fill} tentaclesAnimation={tentaclesAnimation} />
    ))}
    {bodyPaths.map(({ d, fill }) => (
      <path key={d} d={d} fill={fill} />
    ))}
  </Group>
);

const jellyfishPaths = PropTypes.arrayOf(
  PropTypes.shape({
    d: PropTypes.string,
    fill: PropTypes.string
  })
);

Jellyfish.propTypes = {
  bodyAnimation: PropTypes.object.isRequired,
  bodyPaths: jellyfishPaths.isRequired,
  tentaclesAnimation: PropTypes.object.isRequired,
  tentaclePaths: jellyfishPaths.isRequired
};
Jellyfish.whyDidYouRender = true;

export default Jellyfish;
