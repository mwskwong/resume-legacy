import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    height: "100%"
  },
  status: {
    color: "primary.main"
  },
  period: {
    mb: 1,
    color: "text.secondary"
  }
}), []);

export default useSx;