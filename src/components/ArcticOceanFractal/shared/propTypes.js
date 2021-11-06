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

export const jellyfishPropTypes = {
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
