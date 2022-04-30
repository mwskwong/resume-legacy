import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import {
  TimelineItem as MuiTimelineItem,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  TimelineSeparator
} from "@mui/lab";

import PropTypes from "prop-types";
import SupportDocumentListItem from "./SupportDocumentListItem";
import { memo } from "react";
import useSx from "./useTImelineItemSx";

const dateTimeFormat = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" });

const TimelineItem = ({ data }) => {
  const sx = useSx();
  const from = dateTimeFormat.format(new Date(data.from));
  const to = data.to ? dateTimeFormat.format(new Date(data.to)) : "Present";
  const period = `${from} — ${to}`;
  const contents = data.contents || [];
  const supportDocuments = data.supportDocuments || [];

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
            <ListItem key={index} disableGutters>
              <ListItemIcon sx={sx.listItemIcon}>
                <Typography variant="overline" component="span" sx={sx.listItemNumber}>
                  {`${index + 1 < 10 ? 0 : ""}${index + 1}`}
                </Typography>
              </ListItemIcon>
              <ListItemText primary={content} />
            </ListItem>
          ))}
        </List>
        <List disablePadding>
          {supportDocuments.map((supportDocument, index) => (
            <SupportDocumentListItem
              key={index}
              supportDocument={supportDocument}
            />
          ))}
        </List>
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
    supportDocuments: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        thumbnail: PropTypes.object.isRequired
      })
    )
  })
};
TimelineItem.whyDidYouRender = true;

export default memo(TimelineItem);
