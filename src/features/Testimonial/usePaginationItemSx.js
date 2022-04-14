const useSx = ({ active }) => ({
  root: {
    m: .5,
    width: active ? 20 : 8,
    height: 8,
    bgcolor: active ? "primary.main" : "currentColor",
    opacity: active ? 1 : .26,
    borderRadius: "4px",
    transition: theme => theme.transitions.create(["width", "opacity", "backgroundColor"], {
      duration: theme.transitions.duration.shorter
    }),
    "&:hover": {
      opacity: .5,
      bgcolor: "primary.main"
    }
  }
});

export default useSx;