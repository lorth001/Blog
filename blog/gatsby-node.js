const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions

  const postTemplate = path.resolve('src/templates/blog-post.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              author
              preview
            }
          }
        }
      }
    }
  `).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    })
  })
}