import { useMemo } from "react";

const useSx = ({ active }) => useMemo(() => ({
  root: {
    color: active && "primary.main",
    transition: theme => theme.transitions.create(["color"])
  },
  active: {
    height: 6,
    width: 6,
    bgcolor: "primary.main",
    position: "absolute",
    bottom: 0,
    left: "calc(50% - 3px)",
    borderRadius: "50%",
    transition: theme => theme.transitions.create(["opacity"]),
    opacity: active ? 1 : 0
  }
}), [active]);

export default useSx;