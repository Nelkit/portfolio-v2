import React from "react"

import Layout from "../components/layout"
import DynamicImage from "../components/dynamic-image"
import SEO from "../components/seo"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import JSONData from "./../data/social-networks.json"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Inicio" />
      <div className="text-center">
        <h1>Social Media</h1>
        <hr className="divider" />
        <ul className="Social-list">
          {JSONData.map((network, index) => (
            <li key={index} >
              <OutboundLink href={network.link} target="_blank" rel="noopener noreferrer">
                <DynamicImage width={network.width} height={network.height} src={network.icon} />
              </OutboundLink>
            </li>
          ))}
        </ul>
        <hr className="divider" />
      </div>
    </Layout>
  )
}

export default IndexPage
