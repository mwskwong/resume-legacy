import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    bgcolor: "background.sectionPrimary",
    py: 10 // Workaround: allow styled-components to SSR this CSS
  },
  gridContainer: {
    alignItems: "center"
  }
}), []);

export default useSx;