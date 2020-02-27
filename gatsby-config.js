// const { apiEndpoint } = require('./prismic-config');
// var repo = /([^\/]+)\.prismic\.io\/graphql/.exec(apiEndpoint);

module.exports = {
  siteMetadata: {
    title: `Borrelli's Bakery Website`,
    description: `Borrelli's bakery in Providence Rhode island has been making baked goods since 1948`,
    author: `Lit on fire design`,
  },
  plugins: [
		// {
		// 	resolve: 'gatsby-source-prismic-graphql',
		// 	options: {
		// 		repositoryName: repo[1], // Loads the repo name from prismic configuration
		// 	}
		// },
		`gatsby-plugin-layout`,
    {
			resolve: `gatsby-plugin-styled-components`,
      options: {
				// Use this during production to shorten class names in styled-components
        // displayName: false
      },
    },
    `gatsby-plugin-react-helmet-async`,
    {
			resolve: `gatsby-source-filesystem`,
      options: {
				name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
			resolve: `gatsby-plugin-manifest`,
      options: {
				name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
		},
  ],
}
