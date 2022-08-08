import { UseSx } from "types";

const useSx: UseSx = sx => ({
  simpleIcons: {
    p: "2px",
    ...sx
  }
});

export default useSx;