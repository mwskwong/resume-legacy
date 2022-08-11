import { UseSx } from "types";

const useSx: UseSx = sx => ({
  root: sx,
  cardContent: {
    display: "flex",
    alignItems: "center"
  },
  icon: {
    mr: "16px"
  },
  dates: {
    color: "text.secondary"
  }
});

export default useSx;