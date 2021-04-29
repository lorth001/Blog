import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <div>
        {data.allMarkdownRemark.edges.slice(0).reverse().map(post => (
          <div key={post.node.id} className="blog-card">
            <Link to={post.node.frontmatter.path}>
              <h3>{post.node.frontmatter.title}</h3>
              <small>{post.node.frontmatter.date}</small>
              <p>{post.node.frontmatter.preview}</p>
            </Link>
          </div>
        ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
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
`

export default IndexPage
