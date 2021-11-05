const transitionSpringBounceIn = {
  type: "spring",
  stiffness: 250,
  damping: 12,
  velocity: 2
};

const timingsAnglerfishEyeLens = {
  delay: ({ anglerfishEyeLensDelay }) => anglerfishEyeLensDelay,
  duration: ({ anglerfishEyeLensDuration }) => anglerfishEyeLensDuration
};

export const poseConfigJellyfish = {
  hide: {
    opacity: 0,
    scale: 0,
    transition: { scale: { ...transitionSpringBounceIn } }
  },
  show: {
    opacity: 1,
    scale: 1,
    delay: ({ jellyFishDelay }) => jellyFishDelay,
    duration: ({ jellyFishDuration }) => jellyFishDuration,
    transition: { scale: { ...transitionSpringBounceIn } }
  }
};

export const poseConfigAnglerfish = {
  hide: {
    rotate: 15,
    scale: 1.6,
    x: -92,
    y: -45
  },
  show: {
    rotate: 0,
    scale: 1,
    x: 20,
    y: 8,
    delay: ({ anglerfishDelay }) => anglerfishDelay,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      velocity: 15,
      duration: ({ anglerfishDuration }) => anglerfishDuration
    }
  }
};

export const poseConfigAnglerfishEyeLens = {
  hide: { scale: 1 },
  show: {
    scale: 0.7,
    ...timingsAnglerfishEyeLens
  }
};

export const poseConfigAnglerfishForeheadSkinFold = {
  hide: { opacity: 1 },
  show: {
    opacity: 0,
    ...timingsAnglerfishEyeLens
  }
};
