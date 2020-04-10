import React from 'react';

import NewsBlock from './../NewsBlock'
import newsBlockData from './../newsBlockData'

import './firstScreen.scss'



class FirstScreen extends React.Component {
	render () {
		return (
			<section className='first-screen'>
				{
					newsBlockData.filter(item => item.id < 6).map(({
						id,
						image,
						category,
						authorDate,
						title,
					})=>{
						return (
							<div key={id} className='first-screen__col'>
								<NewsBlock 
									id={id}
									image={image}
									category={category}
									authorDate={authorDate}
									title={title}
								/>
							</div>
						)
					})
				}
			</section>			
		)
	}
}

export default FirstScreen;