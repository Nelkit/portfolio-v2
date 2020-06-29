import PropTypes from "prop-types"
import React from "react"
import "./../styles/header.css"
import Typed from 'react-typed';
import Menu from './menu.js'
import Avatar from './avatar.js'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Header = ({ siteTitle, props }) => {
  return(
    <header className="Header gradient">
      <div className="Content">
        <Menu />
          <>
          <h1 className="Header-title text-center title-spacing" >
              <span>Hi, I'm Nelkit,</span>
              <br/>
              <strong>
                <Typed
                  strings={[
                    'iOS Developer',
                    'Android Developer',
                    'Web Developer']}
                  typeSpeed={40}
                  backSpeed={50}
                  loop />
              </strong>
          </h1>
          <div className="Header-contact-bar">
            <Avatar/>
            <OutboundLink href="mailto:nelkitisael792@yahoo.com" className="btn btn-success medium">
            Contacto
            </OutboundLink>
          </div>
          </>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
