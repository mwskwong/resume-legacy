import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";

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
      <Box sx={sx.root}>
        <Typography sx={sx.title} variant="subtitle2">
          Courses
        </Typography>
        <List dense>
          {courses.map(({ name, institution, fileUrl }, index) => {
            const Icon = Icons[camelCase(institution)];
            const Item = fileUrl ? ListItemButton : ListItem;
            const last = index === courses.length - 1;

            return (
              <Item key={name} divider={!last} component={fileUrl && "a"} href={fileUrl}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </Item>
            );
          })}
        </List>
      </Box>
    </div>
  );
};

Courses.whyDidYouRender = true;

export default Courses;