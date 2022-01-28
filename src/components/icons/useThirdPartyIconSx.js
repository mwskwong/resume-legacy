import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  simpleIcons: {
    p: "2px"
  }
}), []);

export default useSx;