import React from 'react';

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

import './../common/style/reset.css'
import './../common/style/base.scss'

class App extends React.Component {
	render () {
		return (
			<div>
				<Header />
				<Main />
				<Footer />
			</div>
		)
	}
}

export default App;
