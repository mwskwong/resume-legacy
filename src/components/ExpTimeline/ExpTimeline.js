import PropTypes from "prop-types";
import Timeline from "./Timeline";
import TimelineItem from "./TimelineItem";

const ExpTimeline = ({ data }) => (
  <Timeline>
    {data.map((datum, index) => (
      <TimelineItem key={index} data={datum} />
    ))}
  </Timeline>
);

ExpTimeline.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    contents: PropTypes.arrayOf(PropTypes.string),
    fileUrl: PropTypes.string
  }))
};
ExpTimeline.whyDidYouRender = true;

export default ExpTimeline;
