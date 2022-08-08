import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React, { ElementType, FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

import EnterpriseDB from "components/icons/EnterpriseDB";
import Microsoft from "components/icons/Microsoft";
import MongoDB from "components/icons/MongoDB";
import Oracle from "components/icons/Oracle";
import Udemy from "components/icons/Udemy";
import camelCase from "camelcase";
import useSx from "./useCoursesSx";

const Icons: Record<string, ElementType> = {
  microsoft: Microsoft,
  oracle: Oracle,
  udemy: Udemy,
  enterpriseDb: EnterpriseDB,
  mongoDb: MongoDB
};

const Courses: FC = () => {
  const sx = useSx();
  const { allContentfulCourse: { nodes: courseNodes } } = useStaticQuery<Queries.CoursesQuery>(graphql`
    query Courses {
      allContentfulCourse(sort: {fields: name}) {
        nodes {
          name
          institution
          certification {
            publicUrl
          }
        }
      }
    }
  `);

  const courses = courseNodes.map(({ certification, ...node }) => ({
    fileUrl: certification?.publicUrl,
    ...node
  }));

  return (
    <>
      <Typography sx={sx.title} variant="subtitle2" component="h3">
        Courses
      </Typography>
      <List dense>
        {courses.map(({ name, institution, fileUrl }) => {
          const Icon = Icons[camelCase(institution)];

          const content = (
            <>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </>
          );

          if (fileUrl) {
            return (
              <ListItem key={name} disablePadding>
                <ListItemButton component="a" href={fileUrl}>
                  {content}
                </ListItemButton>
              </ListItem>
            );
          } else {
            return (
              <ListItem key={name}>
                {content}
              </ListItem>
            );
          }
        })}
      </List>
    </>
  );
};

if (process.env.NODE_ENV === "development") Courses.whyDidYouRender = true;

export default Courses;