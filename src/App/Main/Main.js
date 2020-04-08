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
                	<Route exact path='/' component={FirstScreen} />
					<Route exact path='/' component={MainNews} />
					<Route exact path='/' component={MostPopular} />

					<Route path='/category' component={CategoryPage} />
					<Route path='/article' component={ArticlePage}></Route>
				</div>
				<Route exact path='/' component={Contact} />
			</main>
		)
	}
}

export default Main;