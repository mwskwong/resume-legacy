import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: sxProp,
  submitButton: {
    float: "right",
    mt: 4
  }
}), [sxProp]);

export default useSx;