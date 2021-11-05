import { jellyfishPropTypes } from "../shared/propTypes";
import { poseConfigJellyfish } from "../shared/poseConfig";
import posed from "react-pose";
import styled from "@emotion/styled";

const Tentacle = styled(posed.path(poseConfigJellyfish))`
  ${({ tentaclesAnimation, runCSSAnimations }) => runCSSAnimations && tentaclesAnimation};
  animation-play-state: ${({ runCSSAnimations }) => (runCSSAnimations ? "running" : "paused")};
  transform-style: preserve-3d;
`;

const Group = styled(posed.g(poseConfigJellyfish))`
  ${({ bodyAnimation, runCSSAnimations }) => runCSSAnimations && bodyAnimation};
  animation-play-state: ${({ runCSSAnimations }) => (runCSSAnimations ? "running" : "paused")};
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
