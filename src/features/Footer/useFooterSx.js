const useSx = ({ sxProp }) => ({
  root: {
    color: "text.secondary",
    ...sxProp
  },
  gridContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    py: 4
  }
});

export default useSx;