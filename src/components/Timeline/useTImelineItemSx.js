import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  periodDesktop: {
    color: "text.secondary",
    display: {
      xs: "none",
      md: "initial"
    }
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
  button: {
    mt: 1,
    mb: 2
  }
}), []);

export default useSx;