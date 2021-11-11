import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";

import { Fragment } from "react";
import Microsoft from "components/icons/Mircosoft";
import Oracle from "components/icons/Oracle";
import Udemy from "components/icons/Udemy";
import camelCase from "lodash/camelCase";
import useSx from "./useCoursesSx";

const Icons = {
  microsoft: Microsoft,
  oracle: Oracle,
  udemy: Udemy
};

const Courses = () => {
  const sx = useSx();
  const { courseNodes } = useStaticQuery(graphql`{
    courseNodes: allContentfulCourse(sort: {fields: name}) {
      nodes {
        name
        institution
        certification {
          file {
            url
          }
        }
      }
    }
  }`);

  const courses = courseNodes.nodes.map(({ certification, ...node }) => ({
    fileUrl: certification?.file?.url,
    ...node
  }));

  return (
    <div>
      <Typography sx={sx.title} variant="subtitle2" component="h3">
        Courses
      </Typography>
      <List dense>
        {courses.map(({ name, institution, fileUrl }, index) => {
          const Icon = Icons[camelCase(institution)];
          const last = index === courses.length - 1;

          const content = (
            <Fragment>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </Fragment>
          );

          if (fileUrl) {
            return (
              <ListItem key={name} disablePadding>
                <ListItemButton divider={!last} component="a" href={fileUrl}>
                  {content}
                </ListItemButton>
              </ListItem>
            );
          } else {
            return (
              <ListItem key={name} divider={!last}>
                {content}
              </ListItem>
            );
          }
        })}
      </List>
    </div>
  );
};

Courses.whyDidYouRender = true;

export default Courses;