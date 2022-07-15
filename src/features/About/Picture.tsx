import * as styles from "./picture.module.css";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

const Picture: FC = () => {
  const { picture, name } = useStaticQuery<Queries.PersonalPictureQuery>(graphql`
    query PersonalPicture {
      picture: contentfulAsset(title: {eq: "Personal Photo"}) {
        gatsbyImage(aspectRatio: 1, width: 200)
      }
      name: contentfulName {
        firstName
        lastName
      }
    }
  `);

  const image = picture?.gatsbyImage ? getImage(picture.gatsbyImage) : undefined;

  if (image) {
    return (
      <GatsbyImage
        image={image}
        alt={`Picture of ${name?.firstName} ${name?.lastName}`}
        className={styles.picture}
      />
    );
  }

  return null;
};

Picture.whyDidYouRender = true;

export default Picture;