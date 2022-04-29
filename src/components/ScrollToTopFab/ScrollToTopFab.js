import { Fab, Zoom } from "@mui/material";

import { KeyboardArrowUpRounded as ArrowUp } from "@mui/icons-material";
import { HOME } from "constants/nav";
import { memo } from "react";
import useShowScrollToTopFab from "hooks/useShowScrollToTopFab";
import useSx from "./useSx";

const ScrollToTopFab = () => {
  const sx = useSx();
  const show = useShowScrollToTopFab();

  return (
    <Zoom in={show} sx={sx.zoom} mountOnEnter unmountOnExit>
      <Fab aria-label="scroll to top" href={`#${HOME.id}`}>
        <ArrowUp />
      </Fab>
    </Zoom>
  );
};

ScrollToTopFab.whyDidYouRender = true;

export default memo(ScrollToTopFab);
