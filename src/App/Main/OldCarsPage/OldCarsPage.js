import React from 'react';

import newsBlockData from './../newsBlockData'
import NewsBlock from '../NewsBlock';
import './oldCarsPage.scss'

class OldCarsPage extends React.Component {
	render () {
		return (
			<div className='old-cars'>
				<div className="old-cars__title">
                    Old Cars Articles
                </div>
                <div className="old-cars__wrapper">
				{
                    newsBlockData.filter(item => item.category === 'Old Cars').map(({
						id,
						image,
						category,
						title,
					})=>{
						return (
							<div key={id} className="old-cars__block">
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

export default OldCarsPage;