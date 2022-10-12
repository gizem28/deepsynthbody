module.exports = {
  siteMetadata: {
    title: `DeepSynthBody Web Page`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-mdx", 
  
  "gatsby-transformer-remark", 
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};