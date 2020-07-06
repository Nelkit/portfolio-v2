import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BackIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "back-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img alt="Regresar" style={{"width": 30, "height": 30, "marginRight": 10}} fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default BackIcon
