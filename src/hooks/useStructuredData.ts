import { BreadcrumbList, Graph, Person, WebPage } from "schema-dts";
import { graphql, useStaticQuery } from "gatsby";

import { ABOUT } from "constants/nav";

const useStructuredData = (): Record<"indexPage", Graph> => {
  const {
    site,
    name,
    allContentfulOccupation: { nodes: occupations },
    descriptionNode,
    contact,
    ogImage,
    picture,
    allContentfulSocialMedia: { nodes: socialMedia }
  } = useStaticQuery<Queries.StructuredDataQuery>(graphql`
    query StructuredData {
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
      contact: contentfulContact {
        address
        email
        phone
      }
      ogImage: contentfulAsset(title: {eq: "Open Graph Image"}) {
        publicUrl
      }
      picture: contentfulAsset(title: {eq: "Personal Photo"}) {
        publicUrl
      }
      allContentfulSocialMedia {
        nodes {
          link
        }
      }
    }
  `);

  const url = site?.siteMetadata.siteUrl;

  const fullName = `${name?.firstName} ${name?.lastName}`;
  const jobTitle = occupations.map(({ title }) => title).join(" & ");
  const defaultTitle = `${fullName} - ${jobTitle}`;

  const description = descriptionNode?.content.content;
  const ogImageUrl = `${url}${ogImage?.publicUrl}`;

  const personSchema: Person = {
    "@type": "Person",
    name: fullName,
    gender: "Male",
    jobTitle,
    description,
    address: {
      "@type": "PostalAddress",
      addressRegion: `${contact?.address}`
    },
    email: contact?.email,
    image: `${url}${picture?.publicUrl}`,
    telephone: contact?.phone,
    url,
    sameAs: socialMedia.map(({ link }) => link)
  };

  const breadcrumbListSchema: BreadcrumbList = {
    "@type": "BreadcrumbList",
    name: "Breadcrumbs",
    itemListElement: [
      {
        "@type": "ListItem",
        item: {
          "@id": url || "",
          name: "Homepage"
        },
        position: 1
      }
    ]
  };

  const webpageSchema: WebPage = {
    "@type": "WebPage",
    author: `${url}/#${ABOUT.id}`,
    copyrightHolder: `${url}/#${ABOUT.id}`,
    copyrightYear: 2020,
    description,
    headline: defaultTitle,
    image: ogImageUrl,
    inLanguage: "en",
    mainEntityOfPage: url,
    name: defaultTitle,
    url
  };

  return {
    indexPage: {
      "@context": "https://schema.org",
      "@graph": [
        personSchema,
        webpageSchema,
        breadcrumbListSchema
      ]
    }
  };
};

export default useStructuredData;