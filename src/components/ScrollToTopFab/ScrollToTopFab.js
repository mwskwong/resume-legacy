import { Fab, Zoom } from "@mui/material";

import BackToTop from "components/icons/BackToTop";
import { HOME } from "constants/nav";
import { memo } from "react";
import useShowScrollToTopFab from "hooks/useShowScrollToTopFab";

const ScrollToTopFab = () => {
  const show = useShowScrollToTopFab();

  return (
    <Zoom in={show} mountOnEnter unmountOnExit>
      <Fab aria-label="scroll to top" href={`#${HOME.id}`}>
        <BackToTop />
      </Fab>
    </Zoom>
  );
};

ScrollToTopFab.whyDidYouRender = true;

export default memo(ScrollToTopFab);
