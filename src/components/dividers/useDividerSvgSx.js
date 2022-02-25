import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: {
    display: "block",
    bottom: "-1px",
    left: 0,
    right: 0,
    width: "100%",
    bgcolor: "transparent",
    pointerEvents: "none",
    userSelect: "none",
    verticalAlign: "middle",
    overflow: "hidden",
    ...sxProp
  }
}), [sxProp]);

export default useSx;