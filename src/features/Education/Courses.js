import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";

import ArcticOceanFractal from "arctic-ocean-fractal";
import Microsoft from "components/icons/Mircosoft";
import Oracle from "components/icons/Oracle";
import Udemy from "components/icons/Udemy";
import camelCase from "lodash/camelCase";
import { useInView } from "react-intersection-observer";
import useSx from "./useCoursesSx";

const Icons = {
  microsoft: Microsoft,
  oracle: Oracle,
  udemy: Udemy
};

const Courses = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const sx = useSx();
  const { courseNodes } = useStaticQuery(graphql`{
    courseNodes: allContentfulCourse(sort: {fields: name}) {
      edges {
        node {
          name
          institution
          certification {
            file {
              url
            }
          }
        }
      }
    }
  }`);

  const courses = courseNodes.edges.map(({ node: { certification, ...node } }) => ({
    fileUrl: certification?.file?.url,
    ...node
  }));

  return (
    <div>
      <Grid container spacing={3} alignItems="center">
        <Grid item md={6} xs={12}>
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
        </Grid>
        <Grid item md={6} xs={12}>
          <div ref={ref}>
            <ArcticOceanFractal pose={inView ? "show" : "hide"} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Courses.whyDidYouRender = true;

export default Courses;