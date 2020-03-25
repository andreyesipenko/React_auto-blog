import React from 'react';

import Logo from './../../../Header/Logo/Logo'
import './keepInTouch.scss'
import facebook from './icons/fb.svg'
import twitter from './icons/tw.svg'
import pinterest from './icons/pinterest.svg'
import google from './icons/google.svg'
import instagram from './icons/insta.svg';

class KeepInTouch extends React.Component {
	render () {
		return (
			<div className='keep'>
                <Logo />
                <div className='keep__descr'>
                Short description about the company Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className='keep__title'>
                    Keep in touch
                </div>
                <div className='keep__social-media'>
                    <div className="keep__social-media_block">
                        <img src={facebook} alt='fb' />
                    </div>
                    <div className="keep__social-media_block">
                        <img src={twitter} alt='tw' />
                    </div>
                    <div className="keep__social-media_block">
                        <img src={pinterest} alt='pint' />
                    </div>
                    <div className="keep__social-media_block">
                        <img src={google} alt='google' />
                    </div>
                    <div className="keep__social-media_block">
                        <img src={instagram} alt='insta' />
                    </div>
                </div>
			</div>
		)
	}
}

export default KeepInTouch;