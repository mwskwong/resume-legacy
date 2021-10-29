import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    p: "2px"
  },
  streamline: {
    p: "2px",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
}), []);

export default useSx;