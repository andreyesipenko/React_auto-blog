import React from 'react';

import newsBlockData from './../newsBlockData'
import NewsBlock from '../NewsBlock';
import './sportPage.scss'

class SportPage extends React.Component {
	render () {
		return (
			<div className='sport'>
				<div className="sport__title">
                    Sport Cars Articles
                </div>
                <div className="sport__wrapper">
				{
                    newsBlockData.filter(item => item.category === 'Sport').map(({
						id,
						image,
						category,
						title,
					})=>{
						return (
							<div key={id} className="sport__block">
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

export default SportPage;