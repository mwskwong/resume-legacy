import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    maxWidth: {
      sm: 430,
      md: "none"
    }
  }
}), []);

export default useSx;