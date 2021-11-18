import { graphql, useStaticQuery } from "gatsby";

import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { memo } from "react";
import { useTheme } from "@mui/material";

const SEO = ({ title: titleProp }) => {
  const theme = useTheme();
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
      file {
        url
      }
    }
  }`);

  const description = descriptionNode.content.content;
  const occupations = occupationNodes.nodes.map(({ title }) => title);
  const ogImageUrl = `https:${ogImage.file.url}`;
  const title = titleProp || `${name.firstName} ${name.lastName} - ${occupations.join(" & ")}`;
  const titleTemplate = titleProp ? `%s | ${name.firstName} ${name.lastName}` : null;

  const meta = [
    {
      name: "theme-color",
      content: theme.palette.background.default
    },
    {
      name: "description",
      content: description
    },
    {
      property: "og:url",
      content: site.siteMetadata.siteUrl
    },
    {
      property: "og:type",
      content: "website"
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
      property: "og:image",
      content: ogImageUrl
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      property: "twitter:domain",
      content: new URL(site.siteMetadata.siteUrl).host
    },
    {
      property: "twitter:url",
      content: site.siteMetadata.siteUrl
    },
    {
      name: "twitter:title",
      content: title
    },
    {
      name: "twitter:description",
      content: description
    },
    {
      name: "twitter:image",
      content: ogImageUrl
    }
  ];

  const htmlAttributes = { lang: "en" };

  return (
    <Helmet
      title={title}
      titleTemplate={titleTemplate}
      meta={meta}
      htmlAttributes={htmlAttributes}
    />
  );
};

SEO.propTypes = {
  title: PropTypes.string
};

SEO.whyDidYouRender = true;

export default memo(SEO);