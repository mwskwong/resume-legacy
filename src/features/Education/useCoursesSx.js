import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  contentContainer: {
    maxWidth: 700
  },
  title: {
    color: "primary.main"
  }
}), []);

export default useSx;