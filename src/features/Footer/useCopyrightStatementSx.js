import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    textAlign: "center"
  }
}), []);

export default useSx;