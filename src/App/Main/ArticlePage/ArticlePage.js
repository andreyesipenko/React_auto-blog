import React from 'react';

import newsBlockData, {getProductsMap} from './../newsBlockData'
// import NewsBlock from '../NewsBlock';

const ArticlePage = ({
    match,
    articlesObj = getProductsMap(newsBlockData)
}) => {
	return (
		<div className='article'>
			
		</div>
	)
}

export default ArticlePage