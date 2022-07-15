import { UseSx } from "types";

type UseNavListItemSx = UseSx extends () => infer Return
  ? (active: boolean) => Return
  : never;

const useSx: UseNavListItemSx = active => ({
  textPrimary: {
    typography: "button",
    color: active ? "primary.main" : undefined
  }
});

export default useSx;