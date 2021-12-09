import { useMemo } from "react";

const useSx = () => useMemo(() => ({
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
}), []);

export default useSx;