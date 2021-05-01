import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Template = ({data}) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <div className="blog-heading">
        {post.frontmatter.image ? <span className="blog-image"><Img fluid={post.frontmatter.image.childImageSharp.fluid} alt="Girl in a jacket"></Img></span> : null}
        <div className="blog-heading-text">
          <h1>{post.frontmatter.title}</h1>
          <h4>{post.frontmatter.author}</h4>
          <h4>{post.frontmatter.date}</h4>
        </div>
      </div>
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
        image {
          childImageSharp {
            fluid(
              maxWidth: 2000
              maxHeight: 500
              cropFocus: CENTER
              quality: 50
              fit: FILL
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Template