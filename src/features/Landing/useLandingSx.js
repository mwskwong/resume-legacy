import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    minHeight: "100vh"
  },
  stack: {
    alignItems: "center"
  }
}), []);

export default useSx;