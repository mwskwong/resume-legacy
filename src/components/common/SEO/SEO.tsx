import React, { FC, PropsWithChildren, memo } from "react";
import { graphql, useStaticQuery } from "gatsby";

type SEOProps = {
  title?: string,
  description?: string,
}

const SEO: FC<PropsWithChildren<SEOProps>> = ({ title: titleProp, description: descriptionProp, children }) => {
  const {
    site,
    name,
    allContentfulOccupation: { nodes: occupations },
    descriptionNode,
    ogImage,
    allContentfulSocialMedia: { nodes: socialMedia }
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
      allContentfulOccupation(sort: {fields: priority}) {
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
      allContentfulSocialMedia {
        nodes {
          link
        }
      }
    }
  `);


  const fullName = `${name?.firstName} ${name?.lastName}`;
  const jobTitle = occupations.map(({ title }) => title).join(" & ");

  const siteTitle = `${fullName} - ${jobTitle}`;
  const siteDescription = descriptionNode?.content?.content;
  const siteUrl = site?.siteMetadata.siteUrl;
  const siteImage = ogImage?.publicUrl;

  const seo = {
    title: titleProp ? `${titleProp} | ${fullName}` : siteTitle,
    description: descriptionProp ?? siteDescription,
    url: siteUrl,
    image: `${siteUrl}${siteImage}`
  };

  return (
    <>
      <title>{seo.title}</title>

      <link rel="icon" href="/favicon-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />

      <meta name="author" content={fullName} />
      <meta name="format-detection" content="telephone=no" />

      <meta name="title" property="og:title" content={seo.title} />
      <meta name="description" property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta name="image" property="og:image" content={seo.image} />
      {socialMedia.map(({ link }) =>
        <meta key={link} property="og:see_also" content={link} />
      )}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:image" content={seo.image} />
      {children}
    </>
  );
};

if (process.env.NODE_ENV === "development") SEO.whyDidYouRender = true;

export default memo(SEO);