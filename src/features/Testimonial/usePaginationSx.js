import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex"
  }
}), []);

export default useSx;