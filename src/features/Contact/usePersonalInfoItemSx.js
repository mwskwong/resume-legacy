import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    alignItems: "center"
  },
  title: {
    color: "primary.main",
    textAlign: "center",
    textTransform: "capitalize"
  },
  value: {
    color: "text.primary",
    textAlign: "center"
  }
}), []);

export default useSx;