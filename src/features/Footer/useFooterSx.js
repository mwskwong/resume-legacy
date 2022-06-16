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
    textAlign: {
      xs: "center",
      lg: "unset"
    }
  }
});

export default useSx;