import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import './../styles/avatar.css'

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img className="avatar" alt="Avatar" style={{position:'relative', "width": 160, "height": 160}} fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Avatar
