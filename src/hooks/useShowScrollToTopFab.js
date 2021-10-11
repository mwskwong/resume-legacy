import { useScrollTrigger } from "@mui/material";

const useShowScrollToTopFab = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  return trigger;
};

export default useShowScrollToTopFab;