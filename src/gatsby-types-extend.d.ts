// workaround of GraphQL Typegen doesn't work wth query in gatsby-
declare namespace Queries {
  type SitemapQuery = {
    site: {
      siteMetadata: {
        siteUrl: string
      }
    },
    allSitePage: {
      nodes: string[]
    },
    allPDF: {
      nodes: readonly { publicURL: string }[]
    }
  }
}
