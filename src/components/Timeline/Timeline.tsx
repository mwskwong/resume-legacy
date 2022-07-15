import React, { FC } from "react";

import { ImageDataLike } from "gatsby-plugin-image";
import { Timeline as MuiTimeline } from "@mui/lab";
import TimelineItem from "./TimelineItem";

interface TimelineProps {
  data: {
    from: string,
    to: string,
    title: string,
    subtitle: string,
    contents?: string[],
    supportDocuments: {
      title: string,
      url: string,
      thumbnail: ImageDataLike
    }[]
  }[]
}

const Timeline: FC<TimelineProps> = ({ data }) => (
  <MuiTimeline position="right" >
    {data.map((datum, index) => (
      <TimelineItem key={index} data={datum} />
    ))}
  </MuiTimeline>
);

Timeline.whyDidYouRender = true;

export default Timeline;
