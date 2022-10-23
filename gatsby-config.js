module.exports = {
  siteMetadata: {
    title: `Test Web Page`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [ "gatsby-transformer-remark", 
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/about/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `extra`,
        path: `${__dirname}/extra/`,
      },
    },
  ],
};