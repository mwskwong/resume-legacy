import { Timeline as MuiTimeline } from "@mui/lab";
import PropTypes from "prop-types";
import TimelineItem from "./TimelineItem";

const Timeline = ({ data }) => (
  <MuiTimeline position="right" >
    {data.map((datum, index) => (
      <TimelineItem key={index} data={datum} />
    ))}
  </MuiTimeline>
);

Timeline.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    contents: PropTypes.arrayOf(PropTypes.string),
    fileUrl: PropTypes.string
  }))
};
Timeline.whyDidYouRender = true;

export default Timeline;
