import { Container, Grid, Stack } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";

import HexSlice5 from "components/icons/HexSlice5";
import { PROJECT } from "constants/nav";
import ProjectCard from "./ProjectCard";
import SectionHeader from "components/SectionHeader";
import { memo } from "react";
import useSx from "./useProjectSx";

const Project = () => {
  const sx = useSx();
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
        screenshot {
          gatsbyImageData(placeholder: BLURRED, height: 230)
        }
      }
    }
  }`);

  const projects = projectNodes.nodes.map(({ description, ...node }) => ({
    description: description?.description,
    ...node
  }));

  return (
    <Container component="section" id={PROJECT.id} sx={sx.root}>
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
    </Container>
  );
};

Project.whyDidYouRender = true;

export default memo(Project);