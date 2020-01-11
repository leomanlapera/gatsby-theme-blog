module.exports = ({ contentPath = `blogs`, basePath = `/` }) => ({
  siteMetadata: {
    title: `Gatsby theme blog june`,
    description: `My first gatsby blog theme.`,
    author: `June Leoman Lapera <leomanlapera@gmail.com>`,
  },
  plugins: [
    `gatsby-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPath
      }
    },
    `gatsby-transformer-remark`
  ]
});
