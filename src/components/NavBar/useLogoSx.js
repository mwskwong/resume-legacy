import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: sxProp,
  text: {
    fontFamily: "Riviera, sans-serif !important", // Prevent RubikVariable being used
    color: "inherit"
  }
}), [sxProp]);

export default useSx;