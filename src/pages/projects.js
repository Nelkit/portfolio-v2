import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Tag from "../components/tag"
import SEO from "../components/seo"
import "./../styles/project.css"
const ProjectPage = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(
            filter: { fileAbsolutePath: {regex: "/(projects)/"  }}
            sort: { order: ASC, fields: [frontmatter___order] }
            limit: 1000
          ) {
            edges {
              node {
                html
                frontmatter {
                  order
                  path
                  title
                  summary
                  tags
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
                    <div className="Project-wrapper-image">
                      <Img className="featured" fluid={article.node.frontmatter.featuredImage.childImageSharp.fluid} alt={article.node.frontmatter.title}/>
                      <Tag tagsString={article.node.frontmatter.tags}/>
                    </div>
                    <strong className="title">{article.node.frontmatter.title}</strong>
                    <span className="summary">{article.node.frontmatter.summary} </span>
                  </a>
                </li>
            ))}
          </ul>

      </div>
    </Layout>
  )

}

export default ProjectPage
