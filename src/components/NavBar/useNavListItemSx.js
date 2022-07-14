const useSx = ({ active }) => ({
  textPrimary: {
    typography: "button",
    color: active && "primary.main"
  }
});

export default useSx;