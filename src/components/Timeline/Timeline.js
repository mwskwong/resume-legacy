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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string.isRequired,
      to: PropTypes.string,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      contents: PropTypes.arrayOf(PropTypes.string),
      supportDocuments: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          thumbnail: PropTypes.object.isRequired
        })
      )
    })
  )
};
Timeline.whyDidYouRender = true;

export default Timeline;
