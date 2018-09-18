const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Introducing Books 3.0 (and beyond)',
    description: 'Join our newsletter to get updates',
    keywords: 'books, web3.0, blockchain, stellar, payments, cross, borders, nofees, publishing, creators'
  },
  plugins: [
  	{
		resolve: 'gatsby-plugin-manifest',
		options: {
			name: "Athor.io",
			short_name: "Athor",
			start_url: "/",
			background_color: "#6b37bf",
			theme_color: "#6b37bf",
			display: "minimal-ui",
			icon: "src/assets/images/icon.png", // This path is relative to the root of the site.
		}
    },
    'gatsby-plugin-offline',
  	'gatsby-plugin-react-helmet',
  	{
		resolve: 'gatsby-plugin-root-import',
		options: {
			src: path.join(__dirname, 'src'),
			components: path.join(__dirname, 'src/components'),
			pages: path.join(__dirname, 'src/pages')
		}
    },
	{
		resolve: 'gatsby-plugin-mailchimp',
		options: {
			endpoint: 'https://athor.us19.list-manage.com/subscribe/post?u=1e4e4dfcc3a0e524fe48ea1a1&amp;id=be1bc03d07'
		}
	},
	{
		resolve: 'gatsby-plugin-google-analytics',
		options: {
			trackingId: 'UA-83689-44',
			// Puts tracking script in the head instead of the body
			head: false,
			// Setting this parameter is optional
			anonymize: true,
			// Setting this parameter is also optional
			respectDNT: true,
			cookieDomain: "athor.io",
		}
	}]
}
