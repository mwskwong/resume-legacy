import { UseSx } from "types";

const useSx: UseSx = arg => ({
  root: {
    display: "block",
    bottom: "-1px",
    left: 0,
    right: 0,
    width: "100%",
    bgcolor: "transparent",
    pointerEvents: "none",
    userSelect: "none",
    verticalAlign: "middle",
    overflow: "hidden",
    ...arg?.sx
  }
});

export default useSx;