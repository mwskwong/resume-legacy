import { graphql, useStaticQuery } from "gatsby";

import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const SEO = ({ title: titleProp, description: descriptionProp, meta: metaProp = [] }) => {
  const { site, ogImage } = useStaticQuery(graphql`{
    site {
      siteMetadata {
        title
        shortTitle
        description
        themeColor
        siteUrl
      }
    }
    ogImage: contentfulAsset(title: {eq: "Open Graph Image"}) {
      file {
        url
      }
    }
  }`);

  const title = titleProp || site.siteMetadata?.title;
  const description = descriptionProp || site.siteMetadata?.description;
  const htmlAttributes = { lang: "en" };
  const ogImageUrl = ogImage.file.url;

  const meta = [
    {
      name: "description",
      content: description
    },
    {
      property: "og:title",
      content: title
    },
    {
      property: "og:description",
      content: description
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:url",
      content: site.siteMetadata.siteUrl
    },
    {
      property: "og:image",
      content: ogImageUrl
    },
    ...metaProp
  ];

  return (
    <Helmet
      title={title}
      titleTemplate={titleProp ? `%s | ${site.siteMetadata?.shortTitle}` : null}
      htmlAttributes={htmlAttributes}
      meta={meta}
    />
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object)
};

SEO.whyDidYouRender = true;

export default SEO;