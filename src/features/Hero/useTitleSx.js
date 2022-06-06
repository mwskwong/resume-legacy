const useSx = () => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  title: {
    textTransform: "capitalize",
    textAlign: "center",
    "@media (max-width: 742px)": {
      height: theme => `${theme.typography.h1.lineHeight * 2}em`
    },
    "@media (max-width: 370px)": {
      height: theme => `${theme.typography.h1.lineHeight * 3}em`
    }
  },
  name: {
    color: "primary.main"
  }
});

export default useSx;