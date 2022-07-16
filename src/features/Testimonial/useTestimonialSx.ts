import { UseSx } from "types";

const useSx: UseSx = sx => ({
  root: sx,
  contentContainer: {
    mt: 5
  },
  contentGrid: {
    alignItems: "center"
  }
});

export default useSx;