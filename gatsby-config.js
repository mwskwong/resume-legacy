require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const { CF_PAGES_BRANCH = "main", CONTENTFUL_ACCESS_TOKEN, ANALYZE_BUNDLE, NODE_ENV } = process.env;
const prod = CF_PAGES_BRANCH === "main";
const PROD_URL = "https://mwskwong.com";
const PREVIEW_URL = `https://${CF_PAGES_BRANCH}.mwskwong.com`;
const siteUrl = prod ? PROD_URL : PREVIEW_URL;

module.exports = {
  jsxRuntime: "automatic",
  jsxImportSource: NODE_ENV === "production" ? "@emotion/react" : "@welldone-software/why-did-you-render",
  siteMetadata: {
    siteUrl
  },
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    DETECT_NODE_MUTATIONS: true
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        host: NODE_ENV === "development" || !prod ? "preview.contentful.com" : "cdn.contentful.com",
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        spaceId: "zz9cwhc5t97i"
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
    "gatsby-plugin-perfect-dark-mode",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        background_color: "#ffffff",
        theme_color: "#ffffff",
        theme_color_in_head: false,
        cache_busting_mode: "none",
        display: "standalone",
        icon: "src/images/icon.png",
        name: "Matthew Kwong",
        short_name: "Matthew",
        start_url: "."
      }
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [{ domain: "https://images.ctfassets.net", crossOrigin: false }]
      }
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": [
            "Link: <https://images.ctfassets.net>; rel=preconnect"
          ],
          ...(
            prod
              ? {
                "https://:project.pages.dev/*": [
                  `Link: <${PROD_URL}/:splat>; rel=canonical`
                ]
              }
              : {
                [`https://${CF_PAGES_BRANCH}.:project.pages.dev/*`]: [
                  `Link: <${PREVIEW_URL}/:splat>; rel=canonical`
                ]
              }
          ),
          "https://:commit.:project.pages.dev/*": [
            "X-Robots-Tag: noindex"
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
