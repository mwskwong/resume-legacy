// import { GatsbyImage, getImage } from "gatsby-plugin-image";

import React, { CSSProperties, FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

const Picture: FC = () => {
  const { name } = useStaticQuery<Queries.PersonalPictureQuery>(graphql`
    query PersonalPicture {
      # picture: contentfulAsset(title: {eq: "Personal Photo"}) {
      #   gatsbyImage(aspectRatio: 1, width: 200)
      # }
      name: contentfulName {
        firstName
        lastName
      }
    }
  `);

  // const image = picture?.gatsbyImage ? getImage(picture.gatsbyImage) : undefined;
  const gatsbyImageStyle: CSSProperties = { borderRadius: 38 };

  // if (image) {
  //   return (
  //     <GatsbyImage
  //       image={image}
  //       alt={`Picture of ${name?.firstName} ${name?.lastName}`}
  //       style={gatsbyImageStyle}
  //     />
  //   );
  // }

  return null;
};

if (process.env.NODE_ENV === "development") Picture.whyDidYouRender = true;

export default Picture;