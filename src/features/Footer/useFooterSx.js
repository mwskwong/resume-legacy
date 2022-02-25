import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  divider: {
    color: "background.sectionSecondary"
  },
  root: {
    color: "text.secondary",
    bgcolor: "background.sectionSecondary"
  },
  gridContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    py: 3,
    px: {
      sm: 5
    }
  }
}), []);

export default useSx;