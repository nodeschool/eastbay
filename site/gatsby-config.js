const siteAddress = new URL('https://klequis.io/')

module.exports = {
  siteMetadata: {
    title: "NodeSchool Eastbay (San Francisco)",
    author: "klequis",
    description: "A blog on software development.",
    // TODO: add site URL
    siteUrl: "https://none-yet.com",
    // social: {
    //   twitter: "at_klequis",
    // },
  },
  plugins: [

    `gatsby-plugin-mdx`,

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    // "gatsby-plugin-page-creator",
    // {
      // resolve: "gatsby-plugin-page-creator",
      // options: {
      //   path: `${__dirname}/content/blog`,
      // }
    // },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-83381302-1",
      },
    },
    
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://klequis.io`,
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'klequis.io',
        protocol: siteAddress.protocol.lastIndexOf(0, -1),
        hostname: siteAddress.hostname
      },
    },
  ],
}
