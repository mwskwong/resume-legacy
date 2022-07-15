import { Fab, Zoom } from "@mui/material";
import React, { FC, memo } from "react";

import { KeyboardArrowUpRounded as ArrowUp } from "@mui/icons-material";
import { HOME } from "constants/nav";
import useShowScrollToTopFab from "hooks/useShowScrollToTopFab";

const ScrollToTopFab: FC = () => {
  const show = useShowScrollToTopFab();
  const zoomStyle = { transformOrigin: "bottom right" };

  return (
    <Zoom in={show} style={zoomStyle} mountOnEnter unmountOnExit>
      <Fab aria-label="scroll to top" href={`#${HOME.id}`}>
        <ArrowUp />
      </Fab>
    </Zoom>
  );
};

ScrollToTopFab.whyDidYouRender = true;

export default memo(ScrollToTopFab);
