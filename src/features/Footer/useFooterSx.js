import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    color: "text.secondary"
  },
  gridContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    py: 3,
    px: {
      sm: 5
    }
  }
}), []);

export default useSx;