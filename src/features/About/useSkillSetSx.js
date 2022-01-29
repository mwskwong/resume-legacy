import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  title: {
    color: "primary.main",
    textAlign: "center",
    mb: 2
  },
  gridContainer: {
    justifyContent: "center"
  },
  stack: {
    alignItems: "center"
  },
  icon: {
    color: "primary.main",
    fontSize: 60
  },
  subtitle: {
    textAlign: "center"
  },
  skillsContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  skill: {
    m: 0.5
  }
}), []);

export default useSx;