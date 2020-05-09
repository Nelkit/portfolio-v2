import React from "react"
import { Link } from "gatsby"
import Logo from './logo.js'
import "./../styles/menu.css"

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.dropdownRef = React.createRef()
    }

    showDropDown (){
        const dropdown = this.dropdownRef.current
        dropdown.classList.toggle('show-dropdown-menu')
    }

    render() {
        return (
            <div className="Menu">
                <div className="Menu-content">

                    <ul ref={this.dropdownRef} className="Menu-dropdown">
                        <li className="Menu-dropdown-item">
                            <Link to="/" activeClassName="active">Inicio</Link>
                        </li>
                        <li className="Menu-dropdown-item">
                            <Link to="/about/" activeClassName="active">Sobre mí</Link>
                        </li>
                        <li className="Menu-dropdown-item">
                            <Link to="/projects/" activeClassName="active">Proyectos</Link>
                        </li>
                        <li className="Menu-dropdown-item">
                            <Link to="/blog/" activeClassName="active">Blog</Link>
                        </li>
                    </ul>

                    <ul className="Menu-list">
                        <li className="Menu-list-button">
                            <button className="btn btn-transparent" onClick={() => this.showDropDown()}>Menú</button>
                        </li>
                        <li className="Menu-list-item">
                            <Link to="/" activeClassName="active">Inicio</Link>
                        </li>
                        <li className="Menu-list-item">
                            <Link to="/about/" activeClassName="active">Sobre mí</Link>
                        </li>
                        <li>
                            <Link to="/"><Logo /></Link>
                        </li>
                        <li className="Menu-list-item">
                            <Link to="/projects/" activeClassName="active">Proyectos</Link>
                        </li>
                        <li className="Menu-list-item">
                            <Link to="/blog/" activeClassName="active">Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu