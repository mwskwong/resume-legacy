import { useMemo } from "react";

const useSx = ({ active }) => useMemo(() => ({
  root: {
    color: active && "primary.main"
  },
  active: {
    height: 3,
    width: 16,
    bgcolor: "primary.main",
    position: "absolute",
    bottom: 0,
    left: theme => `calc(50% - ${theme.spacing(1)})`,
    borderRadius: "25%"
  }
}), [active]);

export default useSx;