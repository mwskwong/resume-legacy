import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  submitButton: {
    float: "right",
    mt: 4
  }
}), []);

export default useSx;