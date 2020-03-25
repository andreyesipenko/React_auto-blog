import React from 'react';

import newsBlockData from './../../../newsBlockData'

import './starGuest.scss'

class StarGuest extends React.Component {
	render () {
		return (
			<div className='star-guest'>
                {
                    newsBlockData.filter(item => item.id === 11).map(({
                        id,
                        image,
                        name,
                        profession,
                        story,
                    })=>{
                        return (
                            <div key={id} className='star-guest__block'>
                                <img src={image} alt="leon hunt" />
                                <div className="name">
                                    {name}
                                </div>
                                <div className="profession">
                                    {profession}
                                </div>
                                <div className="story">
                                    {story}
                                </div>
                                <button><a href="/">Continue Reading</a></button>
                            </div>
                        )
                    })
                }
            </div>
        )
	}
}

export default StarGuest