import { IconButton, Stack, SxProps, Theme } from "@mui/material";
import React, { ElementType, FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

import GitHub from "../icons/GitHub";
import LinkedIn from "../icons/LinkedIn";
import StackOverflow from "../icons/StackOverflow";
import camelCase from "camelcase";
import useSx from "./useSx";

type SocialMediaProps = {
  sx?: SxProps<Theme>
}

const Icons: Record<string, ElementType> = {
  stackOverflow: StackOverflow,
  linkedIn: LinkedIn,
  gitHub: GitHub
};

const SocialMedia: FC<SocialMediaProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);
  const { allContentfulSocialMedia: { nodes: socialMedia } } = useStaticQuery<Queries.SocialMediaQuery>(graphql`
    query SocialMedia {
      allContentfulSocialMedia(sort: {fields: name}) {
        nodes {
          name
          link
        }
      }
    }
  `);

  return (
    <Stack spacing={1} direction="row" sx={sx.root}>
      {socialMedia.map(({ name, link }) => {
        const Icon = Icons[camelCase(name)];

        return (
          <IconButton key={name} color="inherit" href={link} target="_blank" aria-label={name}>
            {Icon && <Icon />}
          </IconButton>
        );
      })}
    </Stack>
  );
};

if (process.env.NODE_ENV === "development") SocialMedia.whyDidYouRender = true;

export default SocialMedia;