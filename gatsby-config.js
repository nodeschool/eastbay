module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-83381302-4`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        // anonymize: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-jss'
  ],
  pathPrefix: `eastbay`,
};

