import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    // mt: 6
  }
}), []);

export default useSx;