import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    p: "2px"
  }
}), []);

export default useSx;