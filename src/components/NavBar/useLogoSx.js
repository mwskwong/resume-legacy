const useSx = ({ sxProp }) => ({
  root: sxProp,
  text: {
    fontFamily: "Riviera, sans-serif !important", // Prevent RubikVariable being used
    color: "inherit"
  }
});

export default useSx;