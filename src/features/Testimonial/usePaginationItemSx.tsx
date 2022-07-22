import { UseSx } from "types";

type UsePaginationItemSx = (active: boolean) => ReturnType<UseSx>

const useSx: UsePaginationItemSx = active => ({
  root: {
    m: .5,
    width: active ? 20 : 8,
    height: 8,
    bgcolor: active ? "primary.main" : "currentColor",
    opacity: active ? 1 : .26,
    borderRadius: "4px",
    transition: theme => theme.transitions.create(["width", "opacity", "background-color"], {
      duration: theme.transitions.duration.shorter
    })
  }
});

export default useSx;