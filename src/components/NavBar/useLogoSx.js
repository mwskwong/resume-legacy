import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: sxProp,
  text: {
    fontFamily: "Azonix, sans-serif",
    "@supports (font-variation-settings: normal)": null
  }
}), [sxProp]);

export default useSx;