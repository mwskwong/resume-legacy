import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    "& img": {
      borderRadius: "50%"
    }
  }
}), []);

export default useSx;