import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    background: theme => `linear-gradient(
      ${theme.palette.background.sectionPrimary} 0%,
      ${theme.palette.background.default} 100%
    )`
  },
  submitButton: {
    float: "right",
    mt: 4
  }
}), []);

export default useSx;