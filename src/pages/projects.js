import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(
            filter: { fileAbsolutePath: {regex: "/(projects)/"  }}
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
          ) {
            edges {
              node {
                html
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  path
                  title
                }
              }
            }
        }
    }
  `)

  return(
    <Layout>
      <SEO title="Proyectos" />
      <div className="text-center">
        <h1>Proyectos</h1>
        <hr className="divider" />
          {data.allMarkdownRemark.edges.map((article, index) => (
              <li key={index} >
                  <a href={article.node.frontmatter.path}>{article.node.frontmatter.title}</a>
              </li>
          ))}
      </div>
    </Layout>
  )

}

export default ProjectPage
