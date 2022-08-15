import { UseSx } from "types";

const useSx: UseSx = sx => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    minHeight: "100vh",
    ...sx
  },
  greetings: {
    mb: 2
  },
  title: {
    textAlign: "center"
  },
  name: {
    color: "primary.main"
  },
  socialMedia: {
    my: 4
  }
});

export default useSx;