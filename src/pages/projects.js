import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./../styles/project.css"

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
        }
    }
  `)

  return(
    <Layout>
      <SEO title="Proyectos" />
      <div className="text-center">
        <h1>Proyectos</h1>
        <hr className="divider" />
          <ul className="Project-list">
            {data.allMarkdownRemark.edges.map((article, index) => (
                <li className="Project-list-item" key={index} >
                  <a href={article.node.frontmatter.path}>
                    <Img className="featured" fluid={article.node.frontmatter.featuredImage.childImageSharp.fluid} alt={article.node.frontmatter.title}/>
                    <strong className="title">{article.node.frontmatter.title}</strong>
                    <span className="summary">In the spring of 2003, during my first year of college at USU, I took a general education business... </span>
                  </a>
                </li>
            ))}
          </ul>

      </div>
    </Layout>
  )

}

export default ProjectPage
