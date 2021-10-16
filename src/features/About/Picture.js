import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import { Box } from "@mui/material";
import useSx from "./usePhotoSx";

const Picture = () => {
  const sx = useSx();
  const { picture, name } = useStaticQuery(graphql`{
    picture: contentfulAsset(title: {eq: "Personal Photo"}) {
      gatsbyImageData(width: 200, aspectRatio: 1, placeholder: BLURRED)
    }
    name: contentfulName {
      firstName
      lastName
    }
  }`);
  const image = getImage(picture);

  return (
    <div>
      <Box
        component={GatsbyImage}
        sx={sx.root}
        image={image}
        alt={`Picture of ${name.firstName} ${name.lastName}`}
      />
    </div>
  );
};

Picture.whyDidYouRender = true;

export default Picture;