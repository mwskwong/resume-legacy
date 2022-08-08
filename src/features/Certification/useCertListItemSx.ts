import { UseSx } from "types";

type UseCertListItemSx = (iconColor: string) => ReturnType<UseSx>

const useSx: UseCertListItemSx = iconColor => ({
  icon: {
    fontSize: "48px",
    color: iconColor
  },
  date: {
    typography: "body2",
    color: "text.secondary"
  },
  dateMobile: {
    typography: "body2",
    color: "text.secondary",
    display: {
      xs: "block",
      sm: "none"
    }
  },
  dateContainer: {
    display: {
      xs: "none",
      sm: "initial"
    }
  }
});

export default useSx;