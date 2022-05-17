import { useScrollTrigger } from "@mui/material";

const useShowScrollToTopFab = () => {
  const trigger = useScrollTrigger({ disableHysteresis: true });

  return trigger;
};

export default useShowScrollToTopFab;