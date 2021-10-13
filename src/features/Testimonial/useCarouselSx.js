import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  actionContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: 2
  }
}), []);

export default useSx;