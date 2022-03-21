import { Timeline as MuiTimeline } from "@mui/lab";
import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";

// import TimelineItem from "./TImelineItem";


const Timeline = ({ data }) => {
  const mdDown = useMediaQuery(theme => theme.breakpoints.down("md"));

  return (
    <div>
      <MuiTimeline position={mdDown ? "right" : "alternate"}>
        {data.map((datum, index) => (
          <div key={index}>{JSON.stringify(datum)}</div>
          // <TimelineItem key={index} data={datum} />
        ))}
      </MuiTimeline>
    </div>
  );
};

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
