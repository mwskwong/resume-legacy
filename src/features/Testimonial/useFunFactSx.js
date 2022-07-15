import { alpha } from "@mui/system";

const useSx = () => ({
  root: {
    height: "100%",
    p: 1,
    pl: 2,
    borderLeft: "4px solid",
    borderColor: theme => alpha(theme.palette.primary.main, .25)
  },
  value: {
    color: "primary.main",
    fontWeight: "bold"
  },
  title: {
    color: "text.secondary"
  }
});

export default useSx;