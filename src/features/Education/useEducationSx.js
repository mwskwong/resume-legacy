import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: sxProp,
  gridContainer: {
    alignItems: "center"
  },
  animationContainer: {
    display: "flex",
    justifyContent: "center"
  },
  animationWrapper: {
    width: "100%",
    maxWidth: {
      sm: 430,
      md: "none"
    }
  }
}), [sxProp]);

export default useSx;