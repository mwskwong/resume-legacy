import { UseSx } from "types";

const useSx: UseSx = () => ({
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
    my: "4px",
    mr: "16px",
    alignSelf: "flex-start",
    display: "flex",
    alignItems: "center",
    height: 24
  },
  listItemNumber: {
    color: "text.secondary",
    userSelect: "none",
    lineHeight: "inherit"
  },
  downloadButton: {
    mt: 1
  }
});

export default useSx;