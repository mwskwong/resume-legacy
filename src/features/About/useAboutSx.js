import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    bgcolor: "background.sectionPrimary"
  },
  stack: {
    alignItems: "center"
  }
}), []);

export default useSx;