import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  title: {
    color: "primary.main",
    textAlign: "center"
  }
}), []);

export default useSx;