import { UseSx } from "types";

const useSx: UseSx = sx => ({
  root: sx,
  stack: {
    alignItems: "center"
  },
  list: {
    width: "100%",
    maxWidth: theme => theme.breakpoints.values.sm
  }
});

export default useSx;