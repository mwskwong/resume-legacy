import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import { Box } from "@mui/material";
import useSx from "./usePictureSx";

const Picture = () => {
  const sx = useSx();
  const { picture, name } = useStaticQuery(graphql`{
    picture: contentfulAsset(title: {eq: "Personal Photo"}) {
      localFile {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1, width: 200)
        }
      }
    }
    name: contentfulName {
      firstName
      lastName
    }
  }`);

  const image = getImage(picture.localFile.childImageSharp);

  return (
    <Box
      component={GatsbyImage}
      image={image}
      alt={`Picture of ${name.firstName} ${name.lastName}`}
      sx={sx.root}
    />
  );
};

Picture.whyDidYouRender = true;

export default Picture;