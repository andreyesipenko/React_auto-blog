import React from 'react';

import StarGuest from './StarGuest/StarGuest'
import PopularPosts from './PopularPosts/PopularPosts'
import Instagram from './Instagram/Instagram'
import Tags from './Tags/Tags'
import EmailNewsletter from './EmailNewsletter/EmailNewsletter'

import './secondaryCol.scss'

class SecondaryCol extends React.Component {
	render () {
		return (
			<div className='secondary-col'>
                <StarGuest />
				<PopularPosts />
				<Instagram />
				<Tags />
				<EmailNewsletter />
            </div>
		)
	}
}

export default SecondaryCol;