import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: sxProp,
  text: {
    fontFamily: "Azonix, sans-serif",
    // Prevent RubikVariable being used
    "@supports (font-variation-settings: normal)": {}
  }
}), [sxProp]);

export default useSx;