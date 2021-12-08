import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    textAlign: "center",
    color: "inherit"
  }
}), []);

export default useSx;