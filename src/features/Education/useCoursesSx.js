import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  title: {
    color: "primary.main"
  }
}), []);

export default useSx;