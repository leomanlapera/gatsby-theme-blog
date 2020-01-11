import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import BlogList from '../components/blog-list'

const BlogsTemplate = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
              description
            }
            excerpt(truncate: true, pruneLength: 100)
            timeToRead
          }
        }
      }
    }
  `)

  const { edges: blogs } = data.allMarkdownRemark;
  
  return (
    <Layout>
      <BlogList blogs={blogs} />
    </Layout>
  )
}

export default BlogsTemplate
