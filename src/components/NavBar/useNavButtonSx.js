import { useMemo } from "react";

const useSx = ({ active }) => useMemo(() => ({
  root: {
    color: active && "primary.main"
  },
  active: {
    display: active ? "block" : "none",
    height: 3,
    width: 20,
    bgcolor: "primary.main",
    position: "absolute",
    bottom: 0,
    left: "calc(50% - 10px)",
    borderRadius: 1
  }
}), [active]);

export default useSx;