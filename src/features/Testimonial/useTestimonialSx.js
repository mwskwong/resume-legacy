import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: sxProp,
  contentContainer: {
    mt: 5
  },
  contentGrid: {
    alignItems: "center"
  }
}), [sxProp]);

export default useSx;