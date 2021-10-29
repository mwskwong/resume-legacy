import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    py: 10 // Workaround: allow styled-components to SSR this CSS
  }
}), []);

export default useSx;