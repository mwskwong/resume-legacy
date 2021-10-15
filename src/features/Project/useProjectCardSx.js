import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    height: "100%"
  },
  image: {
    height: 230
  },
  cardContent: {
    textAlign: "center"
  },
  status: {
    color: "primary.main"
  }
}), []);

export default useSx;