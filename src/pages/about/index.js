import React from "react"

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
      <SEO title="Sobre Mi" />
      <div className="text-center">
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <hr className="divider" />
        <div className="Text-body text-left" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </Layout>
  )
}

export default About
