import React from 'react';
import {Route} from 'react-router-dom'
import FirstScreen from './FirstScreen/FirstScreen'
import MainNews from './MainNews/MainNews'
import MostPopular from './MostPopular/MostPopular'
import Contact from './Contact/Contact'
import OldCarsPage from './OldCarsPage/OldCarsPage';
import ConceptPage from './ConceptPage/ConceptPage'
import OffRoadPage from './OffRoadPage/OffRoadPage';
import SportPage from './SportPage/SportPage';
import BusinessPage from './BusinessPage/BusinessPage';

class Main extends React.Component {
	render () {
		return (
			<main>
				<div className="container">
                	<Route exact path='/' component={FirstScreen} />
					<Route exact path='/' component={MainNews} />
					<Route exact path='/' component={MostPopular} />

					<Route path='/oldcars' component={OldCarsPage} />
					<Route path='/concept' component={ConceptPage} />
					<Route path='/offroad' component={OffRoadPage} />
					<Route path='/sport' component={SportPage} />
					<Route path='/business' component={BusinessPage} />
				</div>
				<Route exact path='/' component={Contact} />
			</main>
		)
	}
}

export default Main;