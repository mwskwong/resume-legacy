const useSx = ({ sxProp }) => ({
  root: {
    color: "text.secondary",
    ...sxProp
  },
  gridContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    py: 3,
    px: {
      sm: 5
    }
  }
});

export default useSx;