import { graphql, useStaticQuery } from "gatsby";

import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const SEO = ({ title: titleProp, description: descriptionProp, meta: metaProp = [] }) => {
  const { site, name, occupationsQuery, descriptionQuery, ogImage } = useStaticQuery(graphql`{
    site {
      siteMetadata {
        siteUrl
      }
    }
    name: contentfulName {
      firstName
      lastName
    },
    occupationsQuery: allContentfulOccupation(sort: {fields: title}) {
      edges {
        node {
          title
        }
      }
    }
    descriptionQuery: contentfulSelfIntroduction {
      content {
        content
      }
    }
    ogImage: contentfulAsset(title: {eq: "Open Graph Image"}) {
      file {
        url
      }
    }
  }`);

  const description = descriptionQuery.content.content;
  const occupations = occupationsQuery.edges.map(({ node: { title } }) => title);
  const ogImageUrl = ogImage.file.url;
  const title = titleProp || `${name.firstName} ${name.lastName} - ${occupations.join(" & ")}`;
  const titleTemplate = titleProp ? `%s | ${name.firstName} ${name.lastName}` : null;

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
      titleTemplate={titleTemplate}
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