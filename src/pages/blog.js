import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"
import "./../styles/blog.css"

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
                  summary
                  author
                  authorImage {
                    childImageSharp {
                      fluid(maxWidth: 200) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
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

  console.log(data)
    return(
        <Layout>
          {/* <div className="text-center">
            <SEO title="Blog" />
            <h1>Blog</h1>
            <hr className="divider" />
            {data.allMarkdownRemark.edges.map((article, index) => (
                <>
                <article className="Article-item" key={index} >
                    <a href={article.node.frontmatter.path}>
                      <Img className="author-image" fluid={article.node.frontmatter.authorImage.childImageSharp.fluid} alt={article.node.frontmatter.author}/>
                      <div className="Featured-wrapper">
                        <Img className="featured" fluid={article.node.frontmatter.featuredImage.childImageSharp.fluid} alt={article.node.frontmatter.title}/>
                      </div>
                      <div className="date">
                          <span>08</span>
                          <hr/>
                          <span>05</span>
                          <hr/>
                          <span>2020</span>
                      </div>
                      <div className="Text-wrapper">
                        <h2 className="title">{article.node.frontmatter.title}</h2>
                        <small className="author">by {article.node.frontmatter.author}</small>
                        <p className="summary">{article.node.frontmatter.summary}</p>
                      </div>
                    </a>
                </article>
                <hr/>
                </>
            ))}
          </div> */}
          <br/>
          <br/>
          <br/>
          <br/>
          <h2>Proximamente</h2>
          <br/>
          <br/>
          <br/>
          <br/>
        </Layout>
    )
}

export default Blog