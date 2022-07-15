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
  animationWrapper: {
    width: "100%",
    maxWidth: 430,
    mb: 2
  },
  socialMedia: {
    mt: 4
  },
  downloadButton: {
    mt: 4
  }
});

export default useSx;