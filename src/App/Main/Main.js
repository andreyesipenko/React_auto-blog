import React from 'react';
import {Route} from 'react-router-dom'
import FirstScreen from './FirstScreen/FirstScreen'
import MainNews from './MainNews/MainNews'
import MostPopular from './MostPopular/MostPopular'
import Contact from './Contact/Contact'
import CategoryPage from './CategoryPage/CategoryPage'
import ArticlePage from './ArticlePage/ArticlePage'

class Main extends React.Component {
	render () {
		return (
			<main>
				<div className="container">
					<Route exact path='/' render={()=> (
						<FirstScreen
						likeButtonsState={this.props.likeButtonsState}
						addLike={this.props.addLike}
						removeLike={this.props.removeLike}
						/>
					)} />
					<Route exact path='/' render={()=> (
						<MainNews
						likeButtonsState={this.props.likeButtonsState}
						addLike={this.props.addLike}
						removeLike={this.props.removeLike}
						/>
					)} />
					<Route exact path='/' render={()=> (
						<MostPopular
						likeButtonsState={this.props.likeButtonsState}
						addLike={this.props.addLike}
						removeLike={this.props.removeLike}
						/>
					)} />

					<Route path='/category/:category' component={CategoryPage} />
					<Route path='/articles/:id' component={ArticlePage} />
				</div>
				<Route exact path='/' component={Contact} />
			</main>
		)
	}
}

export default Main;