const useSx = () => ({
  periodDesktop: {
    color: "text.secondary",
    display: {
      xs: "none",
      md: "unset"
    },
    flex: .28
  },
  timelineContent: {
    pb: 3,
    pr: 0
  },
  periodMobile: {
    color: "text.secondary",
    display: {
      md: "none"
    }
  },
  subtitle: {
    color: "primary.main"
  },
  listItemIcon: {
    minWidth: "initial",
    mr: "32px",
    my: "4px",
    alignSelf: "flex-start"
  },
  listItemNumber: {
    color: "text.secondary"
  },
  downloadButton: {
    mt: 1
  }
});

export default useSx;