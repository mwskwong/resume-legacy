import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  gridContainer: {
    alignItems: "center"
  }
}), []);

export default useSx;