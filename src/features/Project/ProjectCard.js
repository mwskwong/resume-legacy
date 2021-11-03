import { Card, CardContent, Typography } from "@mui/material";

import PropTypes from "prop-types";
import dayjs from "dayjs";
import useSx from "./useProjectCardSx";

const ProjectCard = ({ project }) => {
  const sx = useSx();
  const from = dayjs(project.from).format("MMM YYYY");
  const to = project.to ? dayjs(project.to).format("MMM YYYY") : "Present";
  const period = from === to ? from : `${from} — ${to}`;

  return (
    <Card variant="outlined" sx={sx.root}>
      <CardContent>
        <Typography sx={sx.status} variant="subtitle2" component="div" gutterBottom>
          {project.status}
        </Typography>
        <Typography variant="subtitle1" component="div">
          {project.name}
        </Typography>
        <Typography sx={sx.period} component="div">
          {period}
        </Typography>
        <Typography>{project.description}</Typography>
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
    description: PropTypes.string
  })
};
ProjectCard.whyDidYouRender = true;

export default ProjectCard;