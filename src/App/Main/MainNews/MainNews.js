import React from 'react';

import MainCol from './MainCol/MainCol'
import SecondaryCol from './SecondaryCol/SecondaryCol'
import './mainNews.scss'

class MainNews extends React.Component {
	render () {
		return (
            <section className='main-news'>
				<MainCol 
					likeButtonsState={this.props.likeButtonsState}
					addLike={this.props.addLike}
					removeLike={this.props.removeLike}
				/>
				<SecondaryCol 
					likeButtonsState={this.props.likeButtonsState}
					addLike={this.props.addLike}
					removeLike={this.props.removeLike}
				/>
            </section>
		)
	}
}

export default MainNews;