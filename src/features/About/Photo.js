import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import { Box } from "@mui/material";
import useSx from "./usePhotoSx";

const Photo = () => {
  const sx = useSx();
  const { photo, name } = useStaticQuery(graphql`{
    photo: contentfulAsset(title: {eq: "Personal Photo"}) {
      gatsbyImageData(
        width: 200
        aspectRatio: 1
        cornerRadius: -1
        placeholder: TRACED_SVG
      )
    }
    name: contentfulName {
      firstName
    }
  }`);
  const image = getImage(photo);

  return (
    <Box
      component={GatsbyImage}
      sx={sx.root}
      image={image}
      alt={name.firstName}
    />
  );
};

Photo.whyDidYouRender = true;

export default Photo;