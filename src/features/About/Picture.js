import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Picture = () => {
  const { picture, name } = useStaticQuery(graphql`{
    picture: contentfulAsset(title: {eq: "Personal Photo"}) {
      localFile {
        childImageSharp {
          gatsbyImage(aspectRatio: 1, width: 200)
        }
      }
    }
    name: contentfulName {
      firstName
      lastName
    }
  }`);

  const image = getImage(picture.localFile.childImageSharp);
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