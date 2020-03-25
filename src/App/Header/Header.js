import React from 'react';

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Search from './Seach/Search'

import './header.scss'

class Header extends React.Component {
	render () {
		return (
            <header className='header'>
                <div className='container'>
                    <div className="header__wrapper">
                        <Logo />
                        <Menu />
                        <Search />
                    </div>
                </div>
            </header>
		)
	}
}

export default Header;