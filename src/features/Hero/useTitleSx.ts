import { UseSx } from "types";

const useSx: UseSx = () => ({
  title: {
    textAlign: "center",
    "@media (max-width: 742px)": {
      height: theme => `${Number(theme.typography.h1.lineHeight) * 2}em`
    },
    "@media (max-width: 370px)": {
      height: theme => `${Number(theme.typography.h1.lineHeight) * 3}em`
    },
    width: "100%"
  },
  typeIt: {
    color: "primary.main",
    "--ti-cursor-color": theme => theme.palette.text.primary,
    "--ti-cursor-margin-left": 0,
    "--ti-cursor-margin-right": 0
  }
});

export default useSx;