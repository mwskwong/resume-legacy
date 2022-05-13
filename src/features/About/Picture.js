import * as styles from "./picture.module.css";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import React from "react";

const Picture = () => {
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
    <GatsbyImage
      image={image}
      alt={`Picture of ${name.firstName} ${name.lastName}`}
      className={styles.picture}
    />
  );
};

Picture.whyDidYouRender = true;

export default Picture;