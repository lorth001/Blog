import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Template = ({data}) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }){
      html
      frontmatter {
        path
        title
        author
        date
        preview
      }
    }
  }
`

export default Template