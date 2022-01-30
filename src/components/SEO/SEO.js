import { graphql, useStaticQuery } from "gatsby";

import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { memo } from "react";

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
    }
    occupationNodes: allContentfulOccupation(sort: {fields: title}) {
      nodes {
        title
      }
    }
    descriptionNode: contentfulSelfIntroduction {
      content {
        content
      }
    }
    ogImage: contentfulAsset(title: {eq: "Open Graph Image"}) {
      localFile {
        publicURL
      }
    }
  }`);

  const description = descriptionNode.content.content;
  const occupations = occupationNodes.nodes.map(({ title }) => title);
  const ogImageUrl = `${site.siteMetadata.siteUrl}${ogImage.localFile.publicURL}`;
  const defaultTitle = `${name.firstName} ${name.lastName} - ${occupations.join(" & ")}`;
  const title = titleProp ? `${titleProp} | ${name.firstName} ${name.lastName}` : defaultTitle;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={site.siteMetadata.siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImageUrl} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string
};

SEO.whyDidYouRender = true;

export default memo(SEO);