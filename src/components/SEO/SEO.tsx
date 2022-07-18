import React, { FC, memo } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Helmet } from "react-helmet";

type SEOProps = {
  title?: string
}

const SEO: FC<SEOProps> = ({ title: titleProp }) => {
  const {
    site,
    name,
    occupationNodes,
    descriptionNode,
    contact,
    ogImage,
    picture
  }: Queries.SEOQuery = useStaticQuery(graphql`
    query SEO {
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
      contact: contentfulContact {
        address
        email
        phone
      }
      ogImage: contentfulAsset(title: {eq: "Open Graph Image"}) {
        localFile {
          publicURL
        }
      }
      picture: contentfulAsset(title: {eq: "Personal Photo"}) {
        localFile {
          publicURL
        }
      }
    }
  `);

  const url = site?.siteMetadata?.siteUrl ?? "";

  const fullName = `${name?.firstName} ${name?.lastName}`;
  const jobTitle = occupationNodes.nodes.map(({ title }) => title).join(" & ");
  const defaultTitle = `${fullName} - ${jobTitle}`;

  const description = descriptionNode?.content?.content ?? "";
  const ogImageUrl = `${url}${ogImage?.localFile?.publicURL}`;
  const title = titleProp ? `${titleProp} | ${fullName}` : defaultTitle;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    address: {
      "@type": "PostalAddress",
      addressLocality: `${contact?.address}`
    },
    email: `mailto:${contact?.email}`,
    image: picture?.localFile?.publicURL,
    jobTitle,
    name: fullName,
    telephone: contact?.phone,
    url
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icon-180x180.png" />

      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="format-detection" content="telephone=no" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImageUrl} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

if (process.env.NODE_ENV === "development") SEO.whyDidYouRender = true;

export default memo(SEO);