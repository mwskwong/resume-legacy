import { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const { CF_PAGES_BRANCH = "main", CONTENTFUL_ACCESS_TOKEN, ANALYZE_BUNDLE } = process.env;

const prod = CF_PAGES_BRANCH === "main";
const PROD_URL = "https://mwskwong.com";
const PREVIEW_URL = `https://${CF_PAGES_BRANCH}.mwskwong.com`;
const siteUrl = prod ? PROD_URL : PREVIEW_URL;

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl
  },
  trailingSlash: "always",
  graphqlTypegen: true,
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        spaceId: "zz9cwhc5t97i",
        enableTags: true
      }
    },
    "gatsby-plugin-material-ui",
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "webp", "avif"]
        }
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          query Sitemap {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
            allDoc: allContentfulAsset(
              filter: {metadata: {tags: {elemMatch: {contentful_id: {regex: "/supportingDocument.+|resume/"}}}}}
            ) {
              nodes {
                publicUrl
              }
            }
          }        
        `,
        resolvePages: ({
          allSitePage: { nodes: pages },
          allDoc: { nodes: docs }
        }: Queries.SitemapQuery) =>
          [
            ...pages,
            ...(docs.map(({ publicUrl }) => ({ path: publicUrl })))
          ]
      }
    },
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Matthew Kwong",
        short_name: "Matthew",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        cache_busting_mode: "none",
        display: "standalone",
        icon: "src/assets/images/icon.png",
        icon_options: {
          purpose: "any monochrome"
        }
      }
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": [
            "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"
          ],
          [`${PREVIEW_URL}/*`]: [
            `Link: <${PROD_URL}/:splat>; rel="canonical"`
          ],
          "https://:project.pages.dev/*": [
            `Link: <${PROD_URL}/:splat>; rel="canonical"`
          ],
          "https://:commit.:project.pages.dev/*": [
            `Link: <${PROD_URL}/:splat>; rel="canonical"`
          ]
        }
      }
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/icon-*"]
        }
      }
    },
    ANALYZE_BUNDLE ? "gatsby-plugin-webpack-bundle-analyser-v2" : "",
    ANALYZE_BUNDLE ? "gatsby-plugin-perf-budgets" : ""
  ].filter(Boolean)
};

export default config;
