import { useMemo } from "react";
import useShowScrollToTopFab from "hooks/useShowScrollToTopFab";

const useSx = () => {
  const showScrollToTopFab = useShowScrollToTopFab();

  return useMemo(() => ({
    root: {
      transition: theme => ({
        xs: theme.transitions.create(
          ["bottom"],
          {
            duration: showScrollToTopFab
              ? theme.transitions.duration.enteringScreen
              : theme.transitions.duration.leavingScreen
          }
        ),
        sm: "unset"
      }),
      bottom: theme => ({
        xs: showScrollToTopFab ? theme.spacing(9) : theme.spacing(1),
        sm: theme.spacing(3)
      })
    }
  }), [showScrollToTopFab]);
};

export default useSx;