require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const { nord0 } = require("./src/nord");

const { CF_PAGES_BRANCH = "main", CONTENTFUL_ACCESS_TOKEN, ANALYZE_BUNDLE, NODE_ENV } = process.env;

const prod = CF_PAGES_BRANCH === "main";
const PROD_URL = "https://mwskwong.com";
const PREVIEW_URL = `https://${CF_PAGES_BRANCH}.mwskwong.com`;
const siteUrl = prod ? PROD_URL : PREVIEW_URL;

module.exports = {
  jsxRuntime: "automatic",
  jsxImportSource: NODE_ENV === "production" ? "@emotion/react" : "@welldone-software/why-did-you-render",
  trailingSlash: "always",
  siteMetadata: {
    siteUrl
  },
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
        host: NODE_ENV === "development" || !prod ? "preview.contentful.com" : "cdn.contentful.com",
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        spaceId: "zz9cwhc5t97i",
        downloadLocal: true
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "webp", "avif"],
          placeholder: "blurred"
        }
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `{
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
          allFile {
            nodes {
              publicURL
            }
          }
        }`,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allFile: { nodes: allFiles }
        }) => {
          return [
            ...allPages,
            ...(allFiles.map(({ publicURL }) => ({ path: publicURL })))
          ];
        }
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        background_color: nord0,
        theme_color: nord0,
        cache_busting_mode: "none",
        display: "standalone",
        // icon: "src/images/icon.png",
        name: "Matthew Kwong",
        short_name: "Matthew",
        start_url: ".",
        icons: [
          {
            src: "icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "icon-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "icon-maskable-512x512.png",
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
        headers: {
          "/*": [
            "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"
          ],
          [`${PREVIEW_URL}/*`]: [
            `Link: <${PROD_URL}/:splat>; rel=canonical`
          ],
          "https://:project.pages.dev/*": [
            `Link: <${PROD_URL}/:splat>; rel=canonical`
          ],
          "https://:commit.:project.pages.dev/*": [
            `Link: <${PROD_URL}/:splat>; rel=canonical`
          ]
        }
      }
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**icon-*"]
        }
      }
    },
    ANALYZE_BUNDLE && "gatsby-plugin-webpack-bundle-analyser-v2",
    ANALYZE_BUNDLE && "gatsby-plugin-perf-budgets"
  ].filter(Boolean)
};
