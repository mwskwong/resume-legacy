import { Fab, Zoom } from "@mui/material";

import { HOME } from "constants/nav";
import { KeyboardArrowUpOutlined } from "@mui/icons-material";
import useShowScrollToTopFab from "hooks/useShowScrollToTopFab";

const ScrollToTopFab = () => {
  const show = useShowScrollToTopFab();

  return (
    <Zoom in={show} mountOnEnter unmountOnExit>
      <Fab
        component="a"
        aria-label="scroll to top"
        href={`#${HOME.id}`}
      >
        <KeyboardArrowUpOutlined />
      </Fab>
    </Zoom>
  );
};

ScrollToTopFab.whyDidYouRender = true;

export default ScrollToTopFab;
