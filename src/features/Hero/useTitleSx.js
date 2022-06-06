const useSx = () => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  title: {
    textAlign: "center",
    "@media (max-width: 742px)": {
      height: theme => `${theme.typography.h1.lineHeight * 2}em`
    },
    "@media (max-width: 370px)": {
      height: theme => `${theme.typography.h1.lineHeight * 3}em`
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