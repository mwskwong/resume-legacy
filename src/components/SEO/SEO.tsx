import React, { FC, PropsWithChildren, memo } from "react";
import { graphql, useStaticQuery } from "gatsby";

import useStructuredData from "./useStructuredData";

type SEOProps = {
  title?: string
}

const SEO: FC<PropsWithChildren<SEOProps>> = ({ title: titleProp, children }) => {
  const {
    site,
    name,
    allContentfulOccupation: { nodes: occupations },
    descriptionNode,
    ogImage
  } = useStaticQuery<Queries.SEOQuery>(graphql`
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
      allContentfulOccupation(sort: {fields: title}) {
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
        publicUrl
      }
    }
  `);

  const url = site?.siteMetadata?.siteUrl ?? undefined;

  const fullName = `${name?.firstName} ${name?.lastName}`;
  const jobTitle = occupations.map(({ title }) => title).join(" & ");
  const defaultTitle = `${fullName} - ${jobTitle}`;

  const description = descriptionNode?.content?.content ?? "";
  const ogImageUrl = `${url}${ogImage?.publicUrl}`;
  const title = titleProp ? `${titleProp} | ${fullName}` : defaultTitle;

  const structuredData = useStructuredData();

  return (
    <>
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
      {children}
    </>
  );
};

if (process.env.NODE_ENV === "development") SEO.whyDidYouRender = true;

export default memo(SEO);