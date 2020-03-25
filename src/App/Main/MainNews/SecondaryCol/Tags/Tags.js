import React from 'react';

import tagsData from './tagsData'

import './tags.scss'

class Tags extends React.Component {
	render () {
		return (
			<div className='tags'>
                <div className="tags__title">
                    Tags
				</div>
                <div className='tags__wrapper'>
                    {
                        tagsData.map(({
                            id,
                            tag,
                        })=>{
                            return (
                                <div key={id} className="tags__block">
                                    {tag}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
		)
	}
}

export default Tags;