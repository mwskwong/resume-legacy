import { UseSx } from "types";

const useSx: UseSx = () => ({
  comment: {
    typography: "subtitle1",
    mb: 2
  },
  profileContainer: {
    display: "flex",
    alignItems: "center"
  },
  refereeInfoContainer: {
    ml: 2
  },
  name: {
    fontWeight: "bold"
  },
  jobTitle: {
    color: "text.secondary",
    fontWeight: "regular"
  },
  company: {
    color: "primary.main"
  }
});

export default useSx;