import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  hello: {
    textAlign: "center"
  },
  name: {
    color: "primary.main"
  },
  occupationContainer: {
    alignItems: "center",
    mb: 4
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: "50%",
    bgcolor: "text.primary"
  },
  intro: {
    textAlign: "center"
  }
}), []);

export default useSx;