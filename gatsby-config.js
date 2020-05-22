module.exports = {
  siteMetadata: {
    title: `Nerdy Nook`,
    author: {
      name: `Bhairavee Chitnis`,
      summary: `A Mumbai based blogger who loves to read, watch dramas and code! `,
    },
    description: `A fun blog to find all things nerdy!`,
    siteUrl: `https://nerdynook.com/`,
    social: {
      twitter: `cbhairavee`,
    },
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: `blog`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/assets`,
    //     name: `assets`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nerdy Nook`,
        short_name: `NerdyNook`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        excludedRoutes: ['/wp/v2/themes*', '/wp/v2/settings*'],
        baseUrl: `thenerdynook.com`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        auth: {
          jwt_user: 'admin',
          jwt_pass: 'Harry@23793',
          jwt_base_path: "/jwt-auth/v1/token",
        },
        // searchAndReplaceContentUrls: {
        //   sourceUrl: `http://data.nerdynook.com`,
        //   replacementUrl: ``,
        // },
        
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
