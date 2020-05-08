import React, { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const DynamicImage = ({ src, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile( filter: { internal: { mediaType: { regex: "images/" } } } ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const match = useMemo(() => (
    data.allFile.edges.find(({ node }) => src === node.relativePath)
  ), [ data, src ])

  return (
    <Img
      style={{"width": props.width, "height": props.height}}
      fluid={match.node.childImageSharp.fluid}
      {...props}
    />
  )
}

export default DynamicImage