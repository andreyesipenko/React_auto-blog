import React from 'react';

import newsBlockData from './../newsBlockData'
import NewsBlock from '../NewsBlock';
import './conceptPage.scss'

class ConceptPage extends React.Component {
	render () {
		return (
			<div className='concept'>
				<div className="concept__title">
                    Concept Cars Articles
                </div>
                <div className="concept__wrapper">
				{
                    newsBlockData.filter(item => item.category === 'Concept').map(({
						id,
						image,
						category,
						title,
					})=>{
						return (
							<div key={id} className="concept__block">
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

export default ConceptPage;