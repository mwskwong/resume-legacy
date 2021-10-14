import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    color: "text.primary"
  },
  heading: {
    textAlign: "center",
    textTransform: "capitalize"
  },
  divider: {
    width: 32,
    mx: 1
  },
  separatorContainer: {
    display: "flex",
    flexDirection: "center",
    alignItems: "center",
    justifyContent: "center"
  }
}), []);

export default useSx;