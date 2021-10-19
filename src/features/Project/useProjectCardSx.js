import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    height: "100%"
  },
  cardContent: {
    textAlign: "center"
  },
  status: {
    color: "primary.main"
  }
}), []);

export default useSx;