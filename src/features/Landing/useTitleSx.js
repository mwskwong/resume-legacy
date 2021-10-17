import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  greetings: {
    textTransform: "capitalize"
  },
  title: {
    textTransform: "capitalize",
    textAlign: "center",
    "@media (max-width: 742px)": {
      height: theme => `${theme.typography.h1.lineHeight * 2}em`
    },
    "@media (max-width: 370px)": {
      height: theme => `${theme.typography.h1.lineHeight * 3}em`
    },
    "& .Typewriter__cursor": {
      color: "text.primary"
    },
    width: "100%"
  },
  importantText: {
    color: "primary.main"
  }
}), []);

export default useSx;