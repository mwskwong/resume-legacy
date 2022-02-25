import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  divider: {
    color: "background.sectionPrimary"
  },
  root: {
    bgcolor: "background.sectionPrimary"
  },
  stack: {
    alignItems: "center"
  }
}), []);

export default useSx;