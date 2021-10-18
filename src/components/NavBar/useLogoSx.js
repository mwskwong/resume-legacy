import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: sxProp,
  text: {
    fontFamily: "Azonix, sans-serif"
  }
}), [sxProp]);

export default useSx;