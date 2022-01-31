import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    p: 3,
    justifyContent: "center"
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    color: "primary.main",
    textAlign: "center",
    textTransform: "capitalize",
    mt: 2
  },
  value: {
    textAlign: "center"
  }
}), []);

export default useSx;