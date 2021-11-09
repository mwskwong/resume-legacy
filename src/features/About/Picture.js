import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Picture = () => {
  const { picture, name } = useStaticQuery(graphql`{
    picture: contentfulAsset(title: {eq: "Personal Photo"}) {
      gatsbyImageData(layout: FIXED, width: 200, aspectRatio: 1, placeholder: BLURRED)
    }
    name: contentfulName {
      firstName
      lastName
    }
  }`);
  const image = getImage(picture);
  const style = { borderRadius: "50%" };

  return (
    <GatsbyImage
      image={image}
      alt={`Picture of ${name.firstName} ${name.lastName}`}
      style={style}
    />
  );
};

Picture.whyDidYouRender = true;

export default Picture;