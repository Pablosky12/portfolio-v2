module.exports = {
  siteMetadata: {
    title: "portfolio",
    siteUrl: "https://pmarcano.com"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    
    {
      resolve:"gatsby-plugin-sharp",
      options: {
        icon: "src/images/favicon.png",
      }
    }, 
    // "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Rubik`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-dev",
      options: {
        username: "stiv_ml",
      },
    },
  ],
};
