import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    background: theme => `linear-gradient(
      ${theme.palette.background.sectionPrimary} 0%,
      ${theme.palette.background.default} 100%
    )`
  }
}), []);

export default useSx;