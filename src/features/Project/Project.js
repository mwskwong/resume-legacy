import { Container, Grid, Stack } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";

import HexSlice5 from "components/icons/HexSlice5";
import LazyHydrate from "react-lazy-hydration";
import { PROJECT } from "constants/nav";
import ProjectCard from "./ProjectCard";
import SectionHeader from "components/SectionHeader";
import { memo } from "react";

const Project = () => {
  const { projectNodes } = useStaticQuery(graphql`{
    projectNodes: allContentfulProject(sort: {order: DESC, fields: from}) {
      nodes {
        from
        to
        name
        status
        description {
          description
        }
      }
    }
  }`);

  const projects = projectNodes.nodes.map(({ description, ...node }) => ({
    description: description?.description,
    ...node
  }));

  return (
    <Container component="section" id={PROJECT.id}>
      <LazyHydrate whenVisible>
        <Stack spacing={6}>
          <SectionHeader
            heading="Recent Projects"
            Icon={HexSlice5}
          />
          <div>
            <Grid container spacing={3}>
              {projects.map(project => (
                <Grid key={project.name} item md={4} sm={6} xs={12}>
                  <ProjectCard project={project} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Stack>
      </LazyHydrate>
    </Container>
  );
};

Project.whyDidYouRender = true;

export default memo(Project);