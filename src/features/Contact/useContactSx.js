import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: sxProp,
  formWrapper: {
    minHeight: {
      xs: 1091.78,
      sm: 994.781,
      md: 549
    }
  }
}), [sxProp]);

export default useSx;