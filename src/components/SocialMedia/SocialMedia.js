import { IconButton, Stack } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";

import GitHub from "components/icons/GitHub";
import LinkedIn from "components/icons/LinkedIn";
import PropTypes from "prop-types";
import React from "react";
import StackOverflow from "components/icons/StackOverflow";
import camelCase from "camelcase";
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
      nodes {
        name
        link
      }
    }
  }`);

  const socialMedia = socialMediaNodes.nodes;

  return (
    <Stack spacing={1} direction="row" sx={sx.root}>
      {socialMedia.map(({ name, link }) => {
        const Icon = Icons[camelCase(name)];

        return (
          <IconButton key={name} color="inherit" aria-label={name} href={link}>
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