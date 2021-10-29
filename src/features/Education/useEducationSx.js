import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    bgcolor: "background.sectionPrimary"
  },
  gridContainer: {
    alignItems: "center"
  }
}), []);

export default useSx;