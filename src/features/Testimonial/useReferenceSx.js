import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  comment: {
    mb: 2
  },
  profileContainer: {
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    borderRadius: "50%",
    minWidth: 60
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
}), []);

export default useSx;