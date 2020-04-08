import React from 'react';

import newsBlockData from './../newsBlockData'
import NewsBlock from '../NewsBlock';

class NewsBlockItem extends React.Component {
    

	render () {
		return (
			<div className='article-item'>
				<div className="article-item__title">
                    Your Article
                </div>
                <div className="article-item__wrapper">
				</div>
			</div>
		)
	}
}

export default NewsBlockItem;