import { TimelineItem as MuiTimelineItem, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";

import { Button } from "@mui/material";
import { FileDownloadOutlined as Download } from "@mui/icons-material";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
import { memo } from "react";
import useSx from "./useTImelineItemSx";

const TimelineItem = ({ data }) => {
  const sx = useSx();
  const from = dayjs(data.from).format("MMM YYYY");
  const to = dayjs(data.to).format("MMM YYYY");
  const period = `${from} — ${to}`;

  return (
    <MuiTimelineItem>
      <TimelineOppositeContent sx={sx.periodDesktop} variant="body2">
        {period}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography sx={sx.periodMobile} component="div" variant="body2" gutterBottom>
          {period}
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom>
          {data.title}
        </Typography>
        <Typography sx={sx.subtitle} component="div" gutterBottom>
          {data.subtitle}
        </Typography>
        <Typography component="div" gutterBottom>
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

export default memo(TimelineItem);
