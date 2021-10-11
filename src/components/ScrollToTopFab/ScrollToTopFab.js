import { Fab, Zoom } from "@mui/material";

import { KeyboardArrowUpOutlined } from "@mui/icons-material";
import nav from "contents/nav";
import useShowScrollToTopFab from "hooks/useShowScrollToTopFab";

const ScrollToTopFab = () => {
  const show = useShowScrollToTopFab();

  return (
    <Zoom in={show} mountOnEnter unmountOnExit>
      <Fab
        color="secondary"
        component="a"
        aria-label="scroll to top"
        href={`#${nav.home.id}`}
      >
        <KeyboardArrowUpOutlined />
      </Fab>
    </Zoom>
  );
};

ScrollToTopFab.whyDidYouRender = true;

export default ScrollToTopFab;
