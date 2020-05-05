import React from 'react';

import newsBlockData from './../newsBlockData'
import NewsBlock from '../NewsBlock';

import './categoryPage.scss'

const CategoryPage = () => {
	return (
		<div className='category'>
			{
                newsBlockData.filter(item => item.category).map(({
                      id,
                      image,
                      category,
                      authorDate,
                      title,
                  })=>{
                      return (
                          <div key={id} className='most-popular__block'>
                              <NewsBlock 
                                id={id}
                                image={image}
                                category={category}
                                authorDate={authorDate}
                                title={title}
                                // isLiked={this.props.likeButtonsState[id]}
                                // addLike={this.props.addLike}
                                // removeLike={this.props.removeLike}
                              />
                          </div>
                      )
                  })
              }
		</div>
	)
}

export default CategoryPage