const remarkPrism = require("remark-prism")
module.exports = {
  siteMetadata: {
    title: "J. Paterson Dev",
    description: "A space for all my things",
    author: "J.Paterson",
    siteUrl: 'https://jpaterson.dev'
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "VQsr0BxGmqR6oiCpVTgnfk3MVGlfyyZvt_sduKyjHZg",
        spaceId: "1g2icuusuqut",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "256089540",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        remarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              // inlineCodeMarker: null,
              aliases: {},
              // showLineNumbers: false,
              // noInlineHighlight: false,
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://example.com/graphql'
      }
    },
    {
      resolve: 'gatsby-plugin-theme-ui',
    },
    {
      resolve: 'gatsby-plugin-emotion',
    },
    {
      resolve: 'gatsby-transformer-remark'
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `J. Paterson dev`,
        short_name: `J. Paterson dev`,
        start_url: `/`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline'
  ],
};
