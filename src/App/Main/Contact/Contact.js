import React from 'react';

import KeepInTouch from './KeepInTouch/KeepInTouch'
import RecentPosts from './RecentPosts/RecentPosts'
import Newsletter from './Newsletter/Newsletter'
import './contact.scss'

class Contact extends React.Component {
	render () {
		return (
			<section className='contact'>
				<div className="container">
                    <div className='contact__wrapper'>
                        <KeepInTouch />
                        <RecentPosts />
                        <Newsletter />
                    </div>
				</div>
			</section>
		)
	}
}

export default Contact;