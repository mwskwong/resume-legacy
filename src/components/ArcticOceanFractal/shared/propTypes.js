import PropTypes from "prop-types";

/**
 * The paths data and fill colors.
 */
const jellyfishPaths = PropTypes.arrayOf(
  PropTypes.shape({
    /**
     * The path data.
     */
    d: PropTypes.string,

    /**
     * The path fill color as HEX value.
     */
    fill: PropTypes.string
  })
);

const anglerfishPropTypes = {
  anglerfishProps: PropTypes.shape({
    /**
     * The delay of the anglerfish hiding animation.
     */
    anglerfishDelay: PropTypes.number,

    /**
     * The anglerfish hiding animation duration.
     */
    anglerfishDuration: PropTypes.number,

    /**
     * The delay of the anglerfish eye lens animation.
     */
    anglerfishEyeLensDelay: PropTypes.number,

    /**
     * The total anglerfish eye lens animation duration.
     */
    anglerfishEyeLensDuration: PropTypes.number
  }).isRequired
};

const jellyfishBasePropTypes = {
  poseTimings: PropTypes.shape({
    /**
     * The delay of the jellyfish bounce animation.
     */
    jellyFishDelay: PropTypes.number,

    /**
     * The duration pf the jellyfish animation.
     */
    jellyFishDuration: PropTypes.number
  }).isRequired,

  /**
   * Indicates if the CSS animation keyframes should be run when the pose animation has been completed.
   */
  runCSSAnimations: PropTypes.bool.isRequired
};

const jellyfishPropTypes = {
  ...jellyfishBasePropTypes,
  /**
   * The styled-components CSS styles for the body animation.
   */
  bodyAnimation: PropTypes.object.isRequired,

  /**
   * The SVG path definitions for the body.
   */
  bodyPaths: jellyfishPaths.isRequired,

  /**
   * The styled-components CSS styles for the tentacles animation.
   */
  tentaclesAnimation: PropTypes.object.isRequired,

  /**
   * The SVG path definitions for the tentacles.
   */
  tentaclePaths: jellyfishPaths.isRequired
};

export { anglerfishPropTypes, jellyfishBasePropTypes, jellyfishPropTypes };
