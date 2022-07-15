/// <reference types="@welldone-software/why-did-you-render" />

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
      nodes: { publicURL: string }[]
    }
  }
}

// Extra fields supported by MUI
declare namespace React {
  interface FunctionComponent {
    muiName?: string
  }

  interface VoidFunctionComponent {
    muiName?: string
  }

  interface ExoticComponent {
    muiName?: string
  }

  namespace Component {
    const muiName: string;
  }
}

