import React from 'react';

import MainCol from './MainCol/MainCol'
import SecondaryCol from './SecondaryCol/SecondaryCol'
import './mainNews.scss'

class MainNews extends React.Component {
	render () {
		return (
            <section className='main-news'>
				<MainCol />
				<SecondaryCol />
            </section>
		)
	}
}

export default MainNews;