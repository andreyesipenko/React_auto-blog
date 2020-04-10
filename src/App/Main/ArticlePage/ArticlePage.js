import React from 'react';

import newsBlockData, {getProductsMap} from './../newsBlockData'
// import NewsBlock from '../NewsBlock';

const ArticlePage = ({
    match,
    articlesObj = getProductsMap(newsBlockData)
}) => {
	return (
		<div className='article'>
			<h1> Hello {articlesObj[match.params.id].title} </h1>
		</div>
	)
}

export default ArticlePage