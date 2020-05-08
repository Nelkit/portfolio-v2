import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {

  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { page: { eq: "about"} }) {
        html
        frontmatter {
          page
          title
        }
      }
    }
  `)

  console.log()

  return(
    <Layout>
      <SEO title="Acerca de" />
      <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
    </Layout>
  )
}

export default About
