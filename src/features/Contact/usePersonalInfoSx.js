import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    p: 3
  }
}), []);

export default useSx;