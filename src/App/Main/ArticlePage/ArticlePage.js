import React from 'react';
import './articlePage.css'
import newsBlockData, {getProductsMap} from './../newsBlockData'
// import NewsBlock from '../NewsBlock';

const ArticlePage = ({
    match,
    articlesObj = getProductsMap(newsBlockData)
}) => {
	return (
		<div className='article'>
			<h1> {articlesObj[match.params.id].title} </h1>
			<div className='flex'>
			<img className='article-img' src={articlesObj[match.params.id].image} />
			<div className='article-descr'>
				{articlesObj[match.params.id].description}
			</div>
			</div>



		</div>
	)
}

export default ArticlePage