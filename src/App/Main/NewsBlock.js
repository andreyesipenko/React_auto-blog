import React from 'react';
import PropTypes from 'prop-types'

import './../../common/style/base.scss'

class NewsBlock extends React.Component {
	render () {
        const {
            image,
            category,
            authorDate,
            title,
            description,
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
                    <div className="author-date">{authorDate}</div>
                    <div className="title">{title}</div>
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
    title:PropTypes.string,
    description:PropTypes.string,
}

NewsBlock.defaultProps = {
    authorDate: "Rickie Baroch - June 6, 2019",
    title: "One of Saturn’s largest rings may be newer than anyone",
}

export default NewsBlock;