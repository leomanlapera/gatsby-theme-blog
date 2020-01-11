import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Blog from '../components/blog'

const BlogTemplate = ({ data: { markdownRemark: blog } }) => (
  <Layout>
    <Blog {...blog} />
  </Layout>
)

export const query = graphql`
  query ($blogID: String!) {
    markdownRemark(id: {eq: $blogID}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
      }
      fields {
        slug
      }
      html
      timeToRead
    }
  }
`

export default BlogTemplate
