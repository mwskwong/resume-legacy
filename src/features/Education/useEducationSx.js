import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    bgcolor: "background.sectionPrimary"
  }
}), []);

export default useSx;