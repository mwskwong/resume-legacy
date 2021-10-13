import { Fab, Zoom } from "@mui/material";

import { KeyboardArrowUpRounded as ArrowUp } from "@mui/icons-material";
import { HOME } from "constants/nav";
import useShowScrollToTopFab from "hooks/useShowScrollToTopFab";

const ScrollToTopFab = () => {
  const show = useShowScrollToTopFab();

  return (
    <Zoom in={show} mountOnEnter unmountOnExit>
      <Fab aria-label="scroll to top" href={`#${HOME.id}`}>
        <ArrowUp />
      </Fab>
    </Zoom>
  );
};

ScrollToTopFab.whyDidYouRender = true;

export default ScrollToTopFab;
