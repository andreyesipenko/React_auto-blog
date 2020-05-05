import React from 'react';

import newsBlockData from './../../newsBlockData'
import NewsBlock from './../../NewsBlock'
import './recentPosts.scss'

class RecentPosts extends React.Component {
	render () {
		return (
			<div className='recent-posts'>
                <div className="recent-posts__title">
                    Recent posts
                </div>
                <div className="recent-posts__wrapper">
                    {
                        newsBlockData.filter(item => item.id > 28 && item.id < 32).map(({
                            id,
                            image,
                            authorDate,
                            title
                        })=>{
                            return (
                                <div key={id} className="recent-posts__block">
                                    <NewsBlock 
                                        id={id}
                                        image={image}
                                        authorDate={authorDate}
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

export default RecentPosts;