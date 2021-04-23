import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3><Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></h3>
        <small>{post.node.frontmatter.date}</small>
        <small>{post.node.frontmatter.preview}</small>
      </div>
    ))}
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
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
