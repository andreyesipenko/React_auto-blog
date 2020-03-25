import React from 'react';

import NewsBlock from './../../NewsBlock'
import newsBlockData from './../..//newsBlockData'

import './mainCol.scss'

class MainCol extends React.Component {
	render () {
		return (
            <div className='main-col'>
                {
                    newsBlockData.filter(item => item.id > 5 && item.id < 11).map(({
                        id,
                        image,
                        category,
                        authorDate,
                        title,
                        description,
                    })=>{
                        return (
                            <div key ={id} className="main-col__block">
                                <NewsBlock
                                    image={image}
									category={category}
									authorDate={authorDate}
									title={title}
                                    description={description}
								/>
                                
                            </div>
                        )
                    })
                }
                <div className="main-col__buttons">
                    <div className="main-col__button"><a href="/">&#60;</a></div>
                    <div className="main-col__button button_active"><a href="/">1</a></div>
                    <div className="main-col__button"><a href="/">2</a></div>
                    <div className="main-col__button"><a href="/">3</a></div>
                    <div className="main-col__button"><a href="/">...</a></div>
                    <div className="main-col__button"><a href="/">8</a></div>
                    <div className="main-col__button"><a href="/">&#62;</a></div>
                </div>
            </div>
		)
	}
}

export default MainCol;