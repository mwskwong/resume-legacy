import { UseSx } from "types";

const useSx: UseSx = () => ({
  title: {
    typography: "subtitle2",
    color: "primary.main",
    textAlign: "center"
  },
  cardContent: {
    display: "flex",
    alignItems: "center"
  },
  icon: {
    mr: "16px"
  }
});

export default useSx;