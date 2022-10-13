module.exports = {
  siteMetadata: {
    title: `DeepSynthBody Web Page`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-transformer-remark", 
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};