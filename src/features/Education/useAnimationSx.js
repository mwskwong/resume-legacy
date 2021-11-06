import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  wrapper: {
    width: "100%",
    aspectRatio: "800 / 640.66",
    maxWidth: {
      sm: 430,
      md: "none"
    }
  }
}), []);

export default useSx;