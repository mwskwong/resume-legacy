import { darken } from "@mui/system";
import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    height: "100%",
    p: 1,
    pl: 2,
    borderLeft: "4px solid",
    borderColor: theme => darken(theme.palette.primary.main, 0.5)
  },
  value: {
    color: "primary.main",
    fontWeight: "bold"
  },
  title: {
    color: "text.secondary"
  }
}), []);

export default useSx;