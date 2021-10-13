import { TimelineItem as MuiTimelineItem, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";

import { Button } from "@mui/material";
import { FileDownloadOutlined as Download } from "@mui/icons-material";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import useSx from "./useTImelineItemSx";

const TimelineItem = ({ data }) => {
  const sx = useSx();
  const period = `${data.from} — ${data.to}`;

  return (
    <MuiTimelineItem>
      <TimelineOppositeContent sx={sx.periodDesktop} variant="body2">
        {period}
      </TimelineOppositeContent>
      {/* <TimelineOppositeContent color="text.secondary">
        09:30 am
      </TimelineOppositeContent> */}
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography sx={sx.periodMobile} variant="body2" gutterBottom>
          {period}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {data.title}
        </Typography>
        <Typography sx={sx.subtitle} gutterBottom>
          {data.subtitle}
        </Typography>
        <Typography gutterBottom>
          {data.content}
        </Typography>
        {data.fileUrl && (
          <Button
            sx={sx.button}
            variant="outlined"
            size="small"
            endIcon={<Download fontSize="small" />}
            href={data.fileUrl}
          >
            Download
          </Button>
        )}
      </TimelineContent>
    </MuiTimelineItem >
  );
};

TimelineItem.propTypes = {
  data: PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    content: PropTypes.string,
    fileUrl: PropTypes.string
  })
};
TimelineItem.whyDidYouRender = true;

export default TimelineItem;
