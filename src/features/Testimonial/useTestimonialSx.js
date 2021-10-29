import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    bgcolor: "background.default",
    py: 10 // Workaround: allow styled-components to SSR this CSS
  },
  contentContainer: {
    mt: 5
  },
  contentGrid: {
    alignItems: "center"
  }
}), []);

export default useSx;