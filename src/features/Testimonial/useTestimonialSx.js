import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    bgcolor: "background.default"
  },
  contentContainer: {
    mt: 5
  },
  contentGrid: {
    alignItems:"center"
  }
}), []);

export default useSx;