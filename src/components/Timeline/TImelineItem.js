import { Button, List, ListItem, ListItemText } from "@mui/material";
import {
  TimelineItem as MuiTimelineItem,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  TimelineSeparator
} from "@mui/lab";

import { FileDownloadOutlined as Download } from "@mui/icons-material";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
import { memo } from "react";
import useSx from "./useTImelineItemSx";

const TimelineItem = ({ data }) => {
  const sx = useSx();
  const from = dayjs(data.from).format("MMM YYYY");
  const to = data.to ? dayjs(data.to).format("MMM YYYY") : "Present";
  const period = `${from} — ${to}`;
  const contents = data.contents || [];

  return (
    <MuiTimelineItem>
      <TimelineOppositeContent sx={sx.periodDesktop} variant="body2">
        {period}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={sx.timelineContent}>
        <Typography sx={sx.periodMobile} component="div" variant="body2" gutterBottom>
          {period}
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom>
          {data.title}
        </Typography>
        <Typography sx={sx.subtitle} component="div" gutterBottom>
          {data.subtitle}
        </Typography>
        <List dense>
          {contents.map((content, index) => (
            <ListItem key={index} sx={sx.contentListItem} disablePadding>
              <ListItemText primary={content} />
            </ListItem>
          ))}
        </List>
        {data.fileUrl && (
          <Button
            sx={sx.downloadButton}
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
    to: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    contents: PropTypes.arrayOf(PropTypes.string),
    fileUrl: PropTypes.string
  })
};
TimelineItem.whyDidYouRender = true;

export default memo(TimelineItem);
