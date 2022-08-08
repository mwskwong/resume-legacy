import { UseSx } from "types";

type UseCertListItemSx = (iconColor: string) => ReturnType<UseSx>

const useSx: UseCertListItemSx = iconColor => ({
  icon: {
    fontSize: "48px",
    color: iconColor
  },
  organization: {
    color: "primary.main",
    display: "block"
  }
});

export default useSx;