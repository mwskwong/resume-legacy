import { UseSx } from "types";

type UsePaginationItemSx = (active: boolean) => ReturnType<UseSx>

const useSx: UsePaginationItemSx = active => ({
  root: {
    p: "4px",
    minWidth: "unset",
    borderRadius: "6px"
  },
  item: {
    width: active ? 20 : 8,
    height: 8,
    bgcolor: active ? "primary.main" : "currentColor",
    opacity: active ? 1 : .26,
    borderRadius: "3px",
    transition: theme => theme.transitions.create(["width", "opacity", "background-color"], {
      duration: theme.transitions.duration.shorter
    })
  }
});

export default useSx;