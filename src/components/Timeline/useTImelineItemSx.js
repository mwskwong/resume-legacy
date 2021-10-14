import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  periodDesktop: {
    color: "text.secondary",
    display: {
      xs: "none",
      md: "initial"
    }
  },
  timelineContent: {
    mb: 2
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
}), []);

export default useSx;