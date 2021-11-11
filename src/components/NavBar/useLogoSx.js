import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: sxProp,
  text: {
    // Prevent RubikVariable being used
    fontFamily: "Aquire Bold, sans-serif !important"
  }
}), [sxProp]);

export default useSx;