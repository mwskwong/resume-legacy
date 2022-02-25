import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: sxProp,
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    minHeight: "100vh"
  },
  socialMedia: {
    mt: 3
  },
  downloadButton: {
    mt: 4
  }
}), [sxProp]);

export default useSx;