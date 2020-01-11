const fs = require(`fs`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// check if blogs directory exists
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'blogs'

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

// create slug field for each blog
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value: `/blog${value}`,
    })
  }
}

// create pages for each blog
exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || '/'
  
  actions.createPage({
    path: basePath,
    component: require.resolve(`./src/templates/blogs.js`)
  })

  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('Error loading blogs', reporter.errors)
    return
  }

  const blogs = result.data.allMarkdownRemark.edges

  blogs.forEach(blog => {
    const { id, fields } = blog.node
    actions.createPage({
      path: fields.slug,
      component: require.resolve(`./src/templates/blog.js`),
      context: {
        blogID: id,
      },
    })
  })
}