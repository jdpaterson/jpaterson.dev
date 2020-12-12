module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "VQsr0BxGmqR6oiCpVTgnfk3MVGlfyyZvt_sduKyjHZg",
        spaceId: "1g2icuusuqut",
      },
    },
    "gatsby-plugin-styled-components",
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
    // "gatsby-plugin-manifest",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
