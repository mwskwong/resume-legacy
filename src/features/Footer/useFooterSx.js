const useSx = ({ sxProp }) => ({
  root: {
    color: "text.secondary",
    py: 4,
    ...sxProp
  },
  gridContainer: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    color: "inherit",
    fontWeight: "regular",
    width: "100%",
    textAlign: {
      xs: "center",
      lg: "unset"
    }
  },
  loveIcon: {
    verticalAlign: "middle"
  }
});

export default useSx;