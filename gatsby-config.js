module.exports = {
  pathPrefix: "/gatsby-react-bootstrap-starter",
  siteMetadata: {
    title: `Michael Carrier`,
    description: `Professional portfolio`,
    author: `Michael Carrier`,
  },
  plugins: [
    {
     resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            subsets: [`latin`],
          },
          {
            family: `Oswald`,
            variants: [`700`]
          },
        ],
    },
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `http://localhost:1337`,
      queryLimit: 1000, // Default to 100
      contentTypes: [`jobs`,`projects`,`skills`],
      //If using single types place them in this array.
      // singleTypes: [`home-page`, `contact`],
      // Possibility to login with a strapi user, when content types are not publically available (optional).
      // loginData: {
      //   identifier: "",
      //   password: "",
      // },
    },
  },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -48
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
