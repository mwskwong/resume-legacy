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
  illustrationWrapper: {
    width: "100%",
    maxWidth: 430,
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