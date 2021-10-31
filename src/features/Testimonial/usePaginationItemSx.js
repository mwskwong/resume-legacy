import { useMemo } from "react";

const useSx = ({ active }) => useMemo(() => ({
  root: {
    width: active ? 20 : 12,
    height: 6,
    bgcolor: "primary.main",
    opacity: active ? 1 : .25,
    borderRadius: 1,
    mx: .5,
    transition: theme => theme.transitions.create(["width", "opacity"]),
    "&:hover": {
      opacity: .87
    }
  }
}), [active]);

export default useSx;