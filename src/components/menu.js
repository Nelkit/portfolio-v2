import React from "react"
import { Link } from "gatsby"
import Logo from './logo.js'
import "./../styles/menu.css"

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dropdownIsHidden: true};

        this.showDropDown = this.showDropDown.bind(this);
    }

    showDropDown (){
        if (this.state.dropdownIsHidden){
            this.setState({
                dropdownIsHidden: false,
            })
        }else{
            this.setState({
                dropdownIsHidden: true,
            })
        }
    }

    render() {
        return (
            <div className="Menu">
                <div className="Menu-content">
                    { !this.state.dropdownIsHidden && (
                        <ul className="Menu-dropdown">
                            <li className="Menu-dropdown-item">
                                <Link to="/">Inicio</Link>
                            </li>
                            <li className="Menu-dropdown-item">
                                <Link to="/page-2/">Acerca de</Link>
                            </li>
                            <li className="Menu-dropdown-item">
                                <Link to="/page-2/">Proyectos</Link>
                            </li>
                            <li className="Menu-dropdown-item">
                                <Link to="/page-2/">Blog</Link>
                            </li>
                        </ul>
                    )}
                    <ul className="Menu-list">
                        <li className="Menu-list-button">
                            <button onClick={this.showDropDown}>Menú</button>
                        </li>
                        <li className="Menu-list-item">
                            <Link to="/" activeClassName="active">Inicio</Link>
                        </li>
                        <li className="Menu-list-item">
                            <Link to="/about/" activeClassName="active">Acerca de</Link>
                        </li>
                        <li>
                            <Link to="/"><Logo /></Link>
                        </li>
                        <li className="Menu-list-item">
                            <Link to="/projects/" activeClassName="active">Proyectos</Link>
                        </li>
                        <li className="Menu-list-item">
                            <Link to="/page-2/" activeClassName="active">Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu