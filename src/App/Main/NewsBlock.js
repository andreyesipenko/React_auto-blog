import React from 'react';
import PropTypes from 'prop-types'

import './../../common/style/base.scss'

import {Link} from 'react-router-dom'

class NewsBlock extends React.Component {

    changeLikeState () {
        const {
            isLiked,
            removeLike,
            addLike,
            id,
        } = this.props;

        isLiked ? removeLike(id) : addLike(id)
    }

	render () {
        const {
            image,
            category,
            authorDate,
            title,
            description,
            id,
            isLiked = false,
        } = this.props;

		return (
			<div className='block'>
                <img 
                    src={image} 
                    alt={category} 
                    title={title}
                />
                <div className="info">
                    <div className="category">{category}</div>
                    <button
                        className='like'
                        onClick={()=>this.changeLikeState()}>
                        {isLiked ? <span>&#9829;</span> : <span>&#9825;</span> }
                    </button>
                    <div className="author-date">{authorDate}</div>
                    <div className="title">
                        <Link to={`/articles/${id}`}>{title}</Link>
                    </div>
                    <div className="description">{description}</div>
                </div>
                <div className="shadow"></div>
            </div>
		)
	}
}

NewsBlock.propTypes ={
    image:PropTypes.string.isRequired,
    category:PropTypes.string,
    authorDate:PropTypes.string,
    title:PropTypes.string.isRequired,
    description:PropTypes.string,
}

NewsBlock.defaultProps = {
    authorDate: "Rickie Baroch - June 6, 2019",
}

export default NewsBlock;