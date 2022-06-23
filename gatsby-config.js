module.exports = {
  siteMetadata: {
    title: "Jammy My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    // "gatsby-remark-prismjs",
    // "gatsby-remark-autolink-headers",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",

  ],
};
