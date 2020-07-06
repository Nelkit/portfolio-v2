import React from "react"
import { graphql } from "gatsby"
import Header from "./../components/header"
import BackIcon from "./../components/back-icon"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const skills = frontmatter.skills.split(",")
  const percentages = frontmatter.percentages.split(",")

  return (
    <>
      <Header siteTitle={frontmatter.title} />
      <main>
        <div className="Content">
          <div className="Project-post-container">
            <div className="Project-post">
              <Link className="Back-btn" to="/projects/"><BackIcon />    Regresar a Proyectos</Link>
              <h1>{frontmatter.title}</h1>
              <div className="Project-post-content">
                <h4>Definición del proyecto</h4>
                <p>{frontmatter.summary}</p>
                <h4>Tareas Realizadas</h4>
                <p dangerouslySetInnerHTML={{ __html: html }} />
                <h4>Habilidades Adquiridas</h4>
                <div className="Skills">
                  {skills.map((skill, index) => (
                      <div key={index}>
                        <span>{skill}</span>
                        <div className="progress-bar" style={{background: '#'+frontmatter.color,height:'30px' ,width:percentages[index]+'%'}}>
                          <span>{percentages[index]+'%'}</span>
                        </div>
                      </div>
                  ))}
                </div>
                <hr/>
                <Img className="featured" fluid={frontmatter.featuredImage.childImageSharp.fluid} alt={frontmatter.title}/>
              </div>
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
        summary
        path
        title
        skills
        percentages
        color
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`