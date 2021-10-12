import { GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";

import PropTypes from "prop-types";
import StackOverflow from "components/icons/StackOverflow";
import camelCase from "lodash/camelCase";
import useSx from "./useSx";

const Icons = {
  stackOverflow: StackOverflow,
  linkedIn: LinkedIn,
  gitHub: GitHub
};

const SocialMedia = ({ sx: sxProp }) => {
  const sx = useSx({ sxProp });
  const { socialMediaNodes } = useStaticQuery(graphql`{
    socialMediaNodes: allContentfulSocialMedia(sort: {fields: name}) {
      edges {
        node {
          name
          link
        }
      }
    }
  }`);

  const socialMedia = socialMediaNodes.edges.map(({ node: { name, link } }) => ({ name, link }));

  return (
    <Stack spacing={1} direction="row" sx={sx.root}>
      {socialMedia.map(({ name, link }) => {
        const Icon = Icons[camelCase(name)];

        return (
          <IconButton key={name} color="inherit" aria-label={name} component="a" href={link}>
            <Icon />
          </IconButton>
        );
      })}
    </Stack>
  );
};

SocialMedia.propTypes = {
  sx: PropTypes.object
};

SocialMedia.whyDidYouRender = true;

export default SocialMedia;