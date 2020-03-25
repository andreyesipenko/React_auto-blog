import React from 'react';

import './newsletter.scss'
class Newsletter extends React.Component {
	render () {
		return (
			<div className='newsletter'>
                <div className="newsletter__title">
                    Newsletter
                </div>
                <form action='/'>
                    <input readOnly type="text" name='name' value='' placeholder='Your name' />
                    <input readOnly type="text" name='name' value='' placeholder='Your email address' />
                    <button type="submit"><a href="/">Subscribe to newsletter</a></button>
                </form>
			</div>
		)
	}
}

export default Newsletter;