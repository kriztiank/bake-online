/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    author: `bageriet aps`,
    title: `bageriet`,
    siteUrl: `https://boring-brown-677ecb.netlify.app/`,
    description: `Yummy Goodies Online`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'da'
      }
    }
  ],
};
