import React from 'react';


import './emailNewsletter.scss'

class EmailNewsletter extends React.Component {
	render () {
		return (
			<div className='email'>
                <div className="email__title">
                    Email Newsletter
				</div>
                <div className='email__info'>
                    Sign up to receive email updates and to hear what's going on.
                </div>
                <form action='/'>
                    <input readOnly type='text' name='name' value='' placeholder='Your name' />
                    <input readOnly type="email" name="email" value="" placeholder="Your email address" />
                    <button type="submit">Subscribe to newsletter</button>
                </form>
            </div>
		)
	}
}

export default EmailNewsletter;