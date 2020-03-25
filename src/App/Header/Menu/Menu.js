import React from 'react';
import {Link} from 'react-router-dom'
import './menu.scss'



class Menu extends React.Component {
	render () {
		return (
            <div className="menu">
                <div className="menu__button">
                    <Link to="/">Home</Link>
                </div>
                <div className="menu__button">
                    <Link to="/oldcars">Old Cars</Link>
                </div>
                <div className="menu__button">
                    <Link to="/concept">Concepts</Link>
                </div>
                <div className="menu__button">
                    <Link to="/offroad">Off-Road</Link>
                </div>
                <div className="menu__button">
                    <Link to="/sport">Sport</Link>
                </div>
                <div className="menu__button">
                    <Link to="/business">Business</Link>
                </div>
            </div>
		)
	}
}

export default Menu;