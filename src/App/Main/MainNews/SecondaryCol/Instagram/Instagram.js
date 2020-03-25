import React from 'react';

import newsBlockData from './../../../newsBlockData'
import insta from './insta.svg'

import './instagram.scss'

class Instagram extends React.Component {
	render () {
		return (
			<div className='instagram'>
                <div className="instagram__title">
                    Instagram
				</div>
				<div className='instagram__wrapper'>
                {
					newsBlockData.filter(item => item.id > 14 && item.id < 21).map(({
						id,
						image,
					})=>{
						return (
							<div key={id} className="instagram__block">
								<img src={image} alt='car'/>
							</div>
						)
					})
				}
                </div>
                <button>
                    <img src={insta} alt='insta' /> View instagram
                </button>
            </div>
		)
	}
}

export default Instagram;