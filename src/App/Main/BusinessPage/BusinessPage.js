import React from 'react';

import newsBlockData from './../newsBlockData'
import NewsBlock from '../NewsBlock';
import './businessPage.scss'

class BusinessPage extends React.Component {
	render () {
		return (
			<div className='business'>
				<div className="business__title">
                    Business Cars Articles
                </div>
                <div className="business__wrapper">
                {
                    newsBlockData.filter(item => item.category === 'Business').map(({
						id,
						image,
						category,
						title,
					})=>{
						return (
							<div key={id} className="business__block">
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

export default BusinessPage;