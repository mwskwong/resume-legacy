import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  wrapper: {
    maxWidth: {
      sm: 430,
      md: "none"
    }
  }
}), []);

export default useSx;