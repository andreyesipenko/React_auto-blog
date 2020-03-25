import React from 'react';

import NewsBlock from '../../../NewsBlock';
import newsBlockData from './../../../newsBlockData'

import './popularPosts.scss'

class PopularPosts extends React.Component {
	render () {
		return (
			<div className='popular-posts'>
                <div className="popular-posts__title">
					Popular posts
				</div>
				{
					newsBlockData.filter(item => item.id > 11 && item.id < 15).map(({
						id,
						image,
						category,
						title,
					})=>{
						return (
							<div key={id} className="popular-posts__block">
								<NewsBlock
									image={image}
									category={category}
									title={title}
								/>
							</div>
						)
					})
				}
            </div>
		)
	}
}

export default PopularPosts;