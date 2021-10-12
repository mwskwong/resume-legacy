import { graphql, useStaticQuery } from "gatsby";

import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const SEO = ({ title: titleProp }) => {
  const { site, name, occupationNodes, descriptionNode, ogImage } = useStaticQuery(graphql`{
    site {
      siteMetadata {
        siteUrl
      }
    }
    name: contentfulName {
      firstName
      lastName
    },
    occupationNodes: allContentfulOccupation(sort: {fields: title}) {
      edges {
        node {
          title
        }
      }
    }
    descriptionNode: contentfulSelfIntroduction {
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

  const description = descriptionNode.content.content;
  const occupations = occupationNodes.edges.map(({ node: { title } }) => title);
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
    }
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
  title: PropTypes.string
};

SEO.whyDidYouRender = true;

export default SEO;