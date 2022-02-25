import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: sxProp,
  stack: {
    alignItems: "center"
  }
}), [sxProp]);

export default useSx;