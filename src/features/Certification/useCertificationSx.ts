import { UseSx } from "types";

const useSx: UseSx = sx => ({
  root: sx,
  cardContentStack: {
    alignItems: "center"
  },
  dates: {
    color: "text.secondary"
  },
  dot: {
    verticalAlign: "middle"
  }
});

export default useSx;