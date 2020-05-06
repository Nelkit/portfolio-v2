import PropTypes from "prop-types"
import React from "react"
import "./../styles/header.css"
import Typed from 'react-typed';
import Menu from './menu.js'
import Avatar from './avatar.js'

const Header = ({ siteTitle }) => (
  <header className="extend gradient">

    <div className="Content">
      <Menu />
      <h1 className="Title-header text-center title-spacing">
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
      
      <div>
        <Avatar/>
        <button>Contacto</button>
      </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
