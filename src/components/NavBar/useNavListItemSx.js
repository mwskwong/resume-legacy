import { useMemo } from "react";

const useSx = ({ active }) => useMemo(() => ({
  textPrimary: {
    typography: "button",
    color: active && "primary.main"
  }
}), [active]);

export default useSx;