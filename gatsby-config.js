module.exports = {
  siteMetadata: {
    title: `Borrelli's Bakery Website`,
    description: `Borrelli's bakery in Providence Rhode island has been making baked goods since 1948`,
    author: `Lit on fire design`,
  },
  plugins: [
		{
			resolve: 'gatsby-source-prismic',
			options: {
				repositoryName: 'borrellis-bakery',
				accessToken: process.env.PRISMIC_TOKEN,
				linkResolver: ({ node, key, value }) => doc => {
					// Homepage route fallback
  				return '/';
				},
				schemas: {
					biscuits: require('./prismic/schemas/biscuits.json'),
					breads: require('./prismic/schemas/breads.json'),
					cakes: require('./prismic/schemas/cakes.json'),
					pastries: require('./prismic/schemas/pastries.json'),
					pies: require('./prismic/schemas/pies.json'),
					pizza: require('./prismic/schemas/pizza.json'),
					seasonal: require('./prismic/schemas/seasonal.json'),
					specialty: require('./prismic/schemas/specialty.json'), 
				},
				lang: '*',
				shouldDownloadImage: ({ node, key, value }) => {
					return true;
				},
			},
		},
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
