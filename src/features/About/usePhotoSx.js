import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    borderRadius: "50%"
  }
}), []);

export default useSx;