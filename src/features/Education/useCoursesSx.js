import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mx: "auto"
  },
  title: {
    color: "primary.main",
    textAlign: "center"
  }
}), []);

export default useSx;