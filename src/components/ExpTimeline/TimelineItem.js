import { Button, List, ListItem, ListItemText, Typography } from "@mui/material";
import {
  TimelineItem as MuiTimelineItem,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  TimelineSeparator
} from "@mui/lab";

import { DownloadRounded as Download } from "@mui/icons-material";
import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useTimelineItemSx";

const dateTimeFormat = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" });

const TimelineItem = ({ data }) => {
  const sx = useSx();
  const from = dateTimeFormat.format(new Date(data.from));
  const to = data.to ? dateTimeFormat.format(new Date(data.to)) : "Present";
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
        <Typography sx={sx.periodMobile} variant="body2" component="div" gutterBottom>
          {period}
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom>
          {data.title}
        </Typography>
        <Typography sx={sx.subtitle} component="div" gutterBottom>
          {data.subtitle}
        </Typography>
        <List disablePadding>
          {contents.map((content, index) => (
            <ListItem key={index} sx={sx.contentListItem} disableGutters>
              <ListItemText primary={content} />
            </ListItem>
          ))}
        </List>
        {data.fileUrl && (
          <Button sx={sx.downloadButton} startIcon={<Download />} href={data.fileUrl}>
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
