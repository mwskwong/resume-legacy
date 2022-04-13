const useSx = () => ({
  periodDesktop: {
    color: "text.secondary",
    display: {
      xs: "none",
      md: "initial"
    }
  },
  timelineContent: {
    mb: 4
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
  contentListItem: {
    textAlign: "inherit"
  },
  downloadButton: {
    mt: 1
  }
});

export default useSx;