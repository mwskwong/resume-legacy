import { Fragment } from "react";
import { Timeline as MuiTimeline } from "@mui/lab";
import useSx from "./useTimelineSx";

// eslint-disable-next-line react/prop-types
const Timeline = ({ children, ...props }) => {
  const sx = useSx();

  return (
    <Fragment>
      <MuiTimeline position="alternate" sx={sx.desktop} {...props}>
        {children}
      </MuiTimeline>
      <MuiTimeline position="right" sx={sx.mobile}  {...props}>
        {children}
      </MuiTimeline>
    </Fragment>
  );
};

Timeline.whyDidYouRender = true;

export default Timeline;