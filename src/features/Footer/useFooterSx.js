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
      md: "unset"
    }
  }
});

export default useSx;