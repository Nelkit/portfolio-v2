import React from "react"
import { graphql } from "gatsby"
import Header from "./../components/header"
import Img from "gatsby-image"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Header siteTitle={frontmatter.title} />
      <main>
        <div className="Content">
          <div className="Project-post-container">
            <div className="Project-post">
              <h1>{frontmatter.title}</h1>
              <Img className="featured" fluid={frontmatter.featuredImage.childImageSharp.fluid} alt={frontmatter.title}/>
              <div
                className="Project-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="Content">
          Handmade by me © {new Date().getFullYear()}.
        </div>
      </footer>
    </>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`