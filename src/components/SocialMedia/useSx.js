import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: {
    justifyContent: "center",
    ...sxProp
  }
}), [sxProp]);

export default useSx;