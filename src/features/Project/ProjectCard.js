import { Box, Card, CardContent, Typography } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import PropTypes from "prop-types";
import dayjs from "dayjs";
import useSx from "./useProjectCardSx";

const ProjectCard = ({ project }) => {
  const sx = useSx();
  const from = dayjs(project.from).format("MMM YYYY");
  const to = project.to ? dayjs(project.to).format("MMM YYYY") : "Present";
  const period = from === to ? from : `${from} — ${to}`;
  const image = getImage(project.screenshot);

  return (
    <Card variant="outlined" sx={sx.root}>
      <Box
        component={GatsbyImage}
        sx={sx.image}
        image={image}
        alt={`Screenshot of ${project.name}`}
      />
      <CardContent sx={sx.cardContent}>
        <Typography variant="subtitle1" component="div" gutterBottom>
          {project.name}
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          {period}
        </Typography>
        <Typography sx={sx.status} variant="subtitle2" component="div" gutterBottom>
          {project.status}
        </Typography>
        <Typography variant="body2" component="div" gutterBottom>
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string,
    name: PropTypes.string.isRequired,
    status: PropTypes.string,
    description: PropTypes.string,
    screenshot: PropTypes.object
  })
};
ProjectCard.whyDidYouRender = true;

export default ProjectCard;