import { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";
import { nord0 } from "./src/nord";

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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "constants",
        path: `${__dirname}/src/constants`
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        spaceId: "zz9cwhc5t97i",
        enableTags: true
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-material-ui",
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
    "gatsby-plugin-react-helmet",
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
            allPDF: allContentfulAsset(filter: {file: {contentType: {eq: "application/pdf"}}}) {
              nodes {
                publicUrl
              }
            }
          }
        `,
        resolvePages: ({
          allSitePage: { nodes: pages },
          allPDF: { nodes: pdfs }
        }: Queries.SitemapQuery) =>
          [
            ...pages,
            ...(pdfs.map(({ publicUrl }) => ({ path: publicUrl })))
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
        background_color: nord0,
        theme_color: nord0,
        cache_busting_mode: "none",
        display: "standalone",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/icon-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/icon-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ],
        legacy: false,
        include_favicon: false
      }
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        allPageHeaders: [
          "Link: <https://static.cloudflareinsights.com>; rel=\"preconnect\""
        ],
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
          globPatterns: [
            "**/icon-*",
            "**/favicon.ico"
          ]
        }
      }
    },
    ANALYZE_BUNDLE ? "gatsby-plugin-webpack-bundle-analyser-v2" : "",
    ANALYZE_BUNDLE ? "gatsby-plugin-perf-budgets" : ""
  ].filter(Boolean)
};

export default config;
