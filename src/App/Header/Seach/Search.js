import React from 'react';
import search from './search.svg'
import './search.scss'

class Search extends React.Component {
	render () {
		return (
            <div className="search">
                <input type="text" placeholder="Seach..." />
                <img src={search} alt="search" />
            </div>
            
		)
	}
}

export default Search;