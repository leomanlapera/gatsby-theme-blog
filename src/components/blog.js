import React from 'react'
import { Styled } from 'theme-ui'

const Blog = ({ frontmatter, html, timeToRead }) => (
  <>
    <Styled.h1>{frontmatter.title}</Styled.h1>
    <div>{`${frontmatter.date} ${timeToRead} ☕️ min read`}</div>
    <div dangerouslySetInnerHTML={{__html: html}} />
  </>
)

export default Blog
