import React, { Component } from "react";
import Slider from "react-slick";

import './mostPopular.scss'
import "./slick/slick.css";
import "./slick/slick-theme.css";
import NewsBlock from "../NewsBlock";
import newsBlockData from './../newsBlockData'

export default class MostPopular extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <section className='most-popular'>
          <div className="most-popular__title">
              Most popular
          </div>
          <Slider {...settings}>
              {
                newsBlockData.filter(item => item.id > 20 && item.id < 29).map(({
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
                                isLiked={this.props.likeButtonsState[id]}
                                addLike={this.props.addLike}
                                removeLike={this.props.removeLike}
                              />
                          </div>
                      )
                  })
              }
          </Slider>
      </section>
    );
  }
}