import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"


const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(
            filter: { fileAbsolutePath: {regex: "/(blog)/"  }}
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

  console.log(data)
    return(
        <Layout>
            <SEO title="Blog" />
            <h1>Blog</h1>
            {data.allMarkdownRemark.edges.map((article, index) => (
                <li key={index} >
                    <a href={article.node.frontmatter.path}>{article.node.frontmatter.title}</a>
                </li>
            ))}
        </Layout>
    )
}

export default Blog