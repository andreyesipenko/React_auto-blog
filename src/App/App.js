import React from 'react';

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

import './../common/style/reset.css'
import './../common/style/base.scss'

class App extends React.Component {

	state = {
		likeButtonsState: {
			6: true,
			7: true,
		}
	   }

	addLike = (articleId) => {
		this.setState((prevState)=>({
			likeButtonsState: {
				...prevState.likeButtonsState,
				[articleId]: true,
			}
		}))
	}

	removeLike = (articleId) => {
		this.setState((prevState)=>({
			likeButtonsState: {
				...prevState.likeButtonsState,
				[articleId]: false,
			}
		}))
	}

	render () {
		return (
			<div>
				<Header />
				<Main 
					likeButtonsState={this.state.likeButtonsState}
					addLike={this.addLike}
					removeLike={this.removeLike}
				/>
				<Footer />
			</div>
		)
	}
}

export default App;
