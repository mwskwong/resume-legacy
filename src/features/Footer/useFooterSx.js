const useSx = ({ sxProp }) => ({
  root: {
    color: "text.secondary",
    ...sxProp
  },
  gridContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    py: 4
  },
  text: {
    color: "inherit",
    fontWeight: "regular",
    width: "100%",
    textAlign: {
      xs: "center",
      sm: "unset"
    }
  },
  loveIcon: {
    verticalAlign: "middle"
  }
});

export default useSx;