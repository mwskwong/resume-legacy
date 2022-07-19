import * as styles from "./styles.module.css";

import { Fab, Zoom } from "@mui/material";
import React, { FC, memo } from "react";

import { KeyboardArrowUpRounded as ArrowUp } from "@mui/icons-material";
import { HOME } from "constants/nav";
import useShowScrollToTopFab from "hooks/useShowScrollToTopFab";

const ScrollToTopFab: FC = () => {
  const show = useShowScrollToTopFab();

  return (
    <Zoom className={styles.zoom} in={show} mountOnEnter unmountOnExit>
      <Fab aria-label="scroll to top" href={`#${HOME.id}`}>
        <ArrowUp />
      </Fab>
    </Zoom>
  );
};

if (process.env.NODE_ENV === "development") ScrollToTopFab.whyDidYouRender = true;

export default memo(ScrollToTopFab);
