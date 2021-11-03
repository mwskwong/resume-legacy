import { Card, CardContent, Typography } from "@mui/material";

import PropTypes from "prop-types";
import useSx from "./useProjectCardSx";

const dateTimeFormat = new Intl.DateTimeFormat(undefined, { month: "short", year: "numeric" });

const ProjectCard = ({ project }) => {
  const sx = useSx();
  const from = dateTimeFormat.format(new Date(project.from));
  const to = project.to ? dateTimeFormat.format(new Date(project.to)) : "Present";
  const period = from === to ? from : `${from} — ${to}`;

  return (
    <Card variant="outlined" sx={sx.root}>
      <CardContent>
        <Typography sx={sx.status} variant="subtitle2" component="div" gutterBottom>
          {project.status}
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom>
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