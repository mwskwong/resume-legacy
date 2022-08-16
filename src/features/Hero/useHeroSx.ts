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
  },
  socialMedia: {
    my: 4
  }
});

export default useSx;