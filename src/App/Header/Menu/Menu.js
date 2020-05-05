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
                    <Link to='/'>Old Cars</Link>
                </div>
                <div className="menu__button">
                    <Link to='/'>Concepts</Link>
                </div>
                <div className="menu__button">
                    <Link to='/'>Off-Road</Link>
                </div>
                <div className="menu__button">
                    <Link to='/'>Sport</Link>
                </div>
                <div className="menu__button">
                    <Link to='/'>Business</Link>
                </div>
                <div className='menu__button favourite'>
                    <Link to='/favourite'>Favourite</Link>
                    <div>3</div>
                </div>
            </div>
		)
	}
}

export default Menu;