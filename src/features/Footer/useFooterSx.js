import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: {
    color: "text.secondary",
    ...sxProp
  },
  gridContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    py: 3,
    px: {
      sm: 5
    }
  }
}), [sxProp]);

export default useSx;