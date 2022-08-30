const path = require(`path`)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


// const dotenv = require("dotenv")
// const { createProxyMiddleware } = require("http-proxy-middleware")

// if (process.env.NODE_ENV !== "production") {
//   dotenv.config()
// }


module.exports = {
  // developMiddleware: app => {
  //   app.use(
  //     "/.netlify/functions/",
  //     createProxyMiddleware({
  //       target: "http://localhost:9000",
  //       pathRewrite: {
  //         "/.netlify/functions/": "",
  //       },
  //     })
  //   )
  // },
  siteMetadata: {
    title: `BEABC - The Society of Brazilian Engineers and Architects in British Columbia`,
    description: `Organização de Engenheiros e Arquitetos Brasileiros em British Columbia - Canadá`,
    author: `Grupo de Trabalho BEABC`,
    copyright: `© 2020 ELEN FERREIRA | All Rights Reserved`,
    siteUrl: `https://www.beabc.ca/`,
    socialMedia: {
      instagram: 'https://www.instagram.com/beabc_?utm_medium=copy_link',
      linkedin: 'https://www.linkedin.com/company/beabc-canada',
      youtube: 'https://www.youtube.com/channel/UCwCY9y5p8_7Cynaoz3O6bRg/about',
      twitter: 'https://www.twitter.com/'
    }
  },
  plugins: [
    `@mediacurrent/gatsby-plugin-silence-css-order-warning`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito`,
          `Roboto`,
          `source sans pro\:300,400,400i,700, 800` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    // {
    //   resolve: `gatsby-plugin-translate`,
    //   options: {
    //     googleApiKey: 'process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY', // OPTIONAL: only when Google's translation are set
    //     sourceLanguage: 'pt',
    //     targetLanguages: ['pt', 'en' ],
    //     translateSlug: true, // OPTIONAL: requires Google API key
    //   }
    // },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: `usernameId`,
    //   },
    // },
      
      // options: {
      //   fonts: [
      //     {
      //       family: `Nunito`,
      //       variants: [`300`, `400`, `800`],
      //     },
      //     {
      //       family: `Roboto`,
      //       variants: [`300`, `400`, `700`],
      //     },
      //   ],
      // },
    
    // {
    //   resolve: "gatsby-source-formspree",
    //   options: {
    //     form: "YOUR_FORM_ID",
    //     key: "YOUR_API_KEY",
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 70,
              withWebp: true,
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.GATSBY_SPACE_ID,
    //     accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_beabcFinal.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
