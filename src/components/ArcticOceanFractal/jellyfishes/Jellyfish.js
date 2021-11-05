import { jellyfishPropTypes } from "../shared/propTypes";
import { motion } from "framer-motion";
import { poseConfigJellyfish } from "../shared/poseConfig";
import styled from "@emotion/styled";

const Tentacle = styled(motion.path)`
  ${({ tentaclesAnimation, runCssAnimations }) => runCssAnimations && tentaclesAnimation};
  animation-play-state: ${({ runCssAnimations }) => (runCssAnimations ? "running" : "paused")};
  transform-style: preserve-3d;
`;

const Group = styled(motion.g)`
  ${({ bodyAnimation, runCssAnimations }) => runCssAnimations && bodyAnimation};
  animation-play-state: ${({ runCssAnimations }) => (runCssAnimations ? "running" : "paused")};
  transform-style: preserve-3d;
`;

const Jellyfish = ({ bodyAnimation, bodyPaths, poseTimings, runCssAnimations, tentaclesAnimation, tentaclePaths }) => (
  <Group
    variants={poseConfigJellyfish}
    bodyAnimation={bodyAnimation}
    runCssAnimations={runCssAnimations}
    {...poseTimings}
  >
    {tentaclePaths.map(({ d, fill }) => (
      <Tentacle
        key={d}
        variants={poseConfigJellyfish}
        d={d}
        fill={fill}
        runCssAnimations={runCssAnimations}
        tentaclesAnimation={tentaclesAnimation}
      />
    ))}
    {bodyPaths.map(({ d, fill }) => (
      <path key={d} d={d} fill={fill} />
    ))}
  </Group>
);

Jellyfish.propTypes = jellyfishPropTypes;
Jellyfish.whyDidYouRender = true;

export default Jellyfish;
