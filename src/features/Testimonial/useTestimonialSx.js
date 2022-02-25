import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  divider: {
    color: "background.default",
    bgcolor: "background.sectionPrimary"
  },
  contentContainer: {
    mt: 5
  },
  contentGrid: {
    alignItems: "center"
  }
}), []);

export default useSx;