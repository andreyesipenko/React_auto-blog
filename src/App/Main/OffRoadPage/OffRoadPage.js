import React from 'react';

import newsBlockData from './../newsBlockData'
import NewsBlock from '../NewsBlock';
import './offRoadPage.scss'

class OffRoadPage extends React.Component {
	render () {
		return (
			<div className='off-road'>
				<div className="off-road__title">
                    Off-Road Articles
                </div>
                <div className="off-road__wrapper">
				{
                    newsBlockData.filter(item => item.category === 'Off-Road').map(({
						id,
						image,
						category,
						title,
					})=>{
						return (
							<div key={id} className="off-road__block">
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
			</div>
		)
	}
}

export default OffRoadPage;