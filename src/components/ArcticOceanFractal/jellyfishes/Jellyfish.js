import { jellyfishPropTypes } from "../shared/propTypes";
import { poseConfigJellyfish } from "../shared/poseConfig";
import posed from "react-pose";
import styled from "@emotion/styled";

const Tentacle = styled(posed.path(poseConfigJellyfish))`
  ${({ tentaclesAnimation, runCssAnimations }) => runCssAnimations && tentaclesAnimation};
  animation-play-state: ${({ runCssAnimations }) => (runCssAnimations ? "running" : "paused")};
  transform-style: preserve-3d;
`;

const Group = styled(posed.g(poseConfigJellyfish))`
  ${({ bodyAnimation, runCssAnimations }) => runCssAnimations && bodyAnimation};
  animation-play-state: ${({ runCssAnimations }) => (runCssAnimations ? "running" : "paused")};
  transform-style: preserve-3d;
`;

const Jellyfish = ({ bodyAnimation, bodyPaths, poseTimings, runCssAnimations, tentaclesAnimation, tentaclePaths }) => (
  <Group bodyAnimation={bodyAnimation} runCssAnimations={runCssAnimations} {...poseTimings}>
    {tentaclePaths.map(({ d, fill }) => (
      <Tentacle key={d} d={d} fill={fill} runCssAnimations={runCssAnimations} tentaclesAnimation={tentaclesAnimation} />
    ))}
    {bodyPaths.map(({ d, fill }) => (
      <path key={d} d={d} fill={fill} />
    ))}
  </Group>
);

Jellyfish.propTypes = jellyfishPropTypes;
Jellyfish.whyDidYouRender = true;

export default Jellyfish;
