import { UseSx } from "types";
import { useMemo } from "react";

const useSx: UseSx = () => useMemo(() => ({
  title: {
    typography: "subtitle2",
    color: "primary.main",
    textAlign: "center"
  },
  cardContent: {
    display: "flex",
    alignItems: "center"
  },
  icon: {
    mr: "16px"
  }
}), []);

export default useSx;