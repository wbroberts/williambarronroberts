module.exports = {
  siteMetadata: {
    title: `William Barron Roberts`,
    description: `William Roberts - full stack developer with a passion for front end performance.`,
    author: `William Roberts`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `William Barron Roberts`,
        short_name: `Will Roberts`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/flavicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Fira Sans:200,300,400,700`, `Lato:400,400i`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['/src/css/styles.css'],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
