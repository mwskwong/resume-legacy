import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    p: "2px",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
}), []);

export default useSx;