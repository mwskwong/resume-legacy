import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  ratingContainer: {
    display: "flex"
  },
  skillName: {
    flexGrow: 1
  }
}), []);

export default useSx;