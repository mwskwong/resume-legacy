import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    minHeight: "100vh",
    py: 10 // Workaround: allow styled-components to SSR this CSS
  },
  socialMedia: {
    mt: 3
  },
  downloadButton: {
    mt: 4
  }
}), []);

export default useSx;