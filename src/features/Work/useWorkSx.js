import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: sxProp
}), [sxProp]);

export default useSx;