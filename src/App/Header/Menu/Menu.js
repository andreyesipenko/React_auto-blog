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
                    <Link to="/category">Old Cars</Link>
                </div>
                <div className="menu__button">
                    <Link to="/category">Concepts</Link>
                </div>
                <div className="menu__button">
                    <Link to="/category">Off-Road</Link>
                </div>
                <div className="menu__button">
                    <Link to="/category">Sport</Link>
                </div>
                <div className="menu__button">
                    <Link to="/category">Business</Link>
                </div>
            </div>
		)
	}
}

export default Menu;