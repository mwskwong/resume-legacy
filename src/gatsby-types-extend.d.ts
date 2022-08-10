// workaround of GraphQL Typegen doesn't work wth query in gatsby-plugin-sitemap
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
    allDoc: {
      nodes: { publicUrl: string }[]
    }
  }
}
