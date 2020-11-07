import React from 'react';
import PropTypes from 'prop-types';
import './MovieSlider.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

MovieSlider.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

MovieSlider.defaultProps = {
  items: [],
  title: ''
}

function MovieSlider(props) {
  const { items, title } = props

  const handleClickPre = () => {
    console.log('running 1')
  }

  const handleClickNext = () => {
    console.log('running 2')
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        <div className="slider-list__item">
          <div class="slider-thumbnail-wrapper"><img className="slider-list__item__thumbnail" src="https://static.vieon.vn/vieplay-image/thumbnail_v4/2020/09/14/9u23vx60_khatkhaohanhphuc1920x1080_296_168.webp" /></div>
          <div className="slider-list__item__title">Winter Story</div>
        </div>
        <div className="slider-list__item">
          <div class="slider-thumbnail-wrapper"><img className="slider-list__item__thumbnail" src="https://static.vieon.vn/vieplay-image/thumbnail_v4/2020/09/14/9u23vx60_khatkhaohanhphuc1920x1080_296_168.webp" /></div>
          <div className="slider-list__item__title">Winter Story</div>
        </div>
        <div className="slider-list__item">
          <div class="slider-thumbnail-wrapper"><img className="slider-list__item__thumbnail" src="https://static.vieon.vn/vieplay-image/poster_v4/2020/10/20/i17aq0zj_3-23_360_534.webp" /></div>
          <div className="slider-list__item__title">Winter Story</div>
        </div>
        <div className="slider-list__item">
          <div class="slider-thumbnail-wrapper"><img className="slider-list__item__thumbnail" src="https://static.vieon.vn/vieplay-image/thumbnail_v4/2020/09/14/9u23vx60_khatkhaohanhphuc1920x1080_296_168.webp" /></div>
          <div className="slider-list__item__title">Winter Story</div>
        </div>
        <div className="slider-list__item">
          <div class="slider-thumbnail-wrapper"><img className="slider-list__item__thumbnail" src="https://static.vieon.vn/vieplay-image/thumbnail_v4/2020/09/14/9u23vx60_khatkhaohanhphuc1920x1080_296_168.webp" /></div>
          <div className="slider-list__item__title">Winter Story</div>
        </div>
        <div className="slider-list__item">
          <div class="slider-thumbnail-wrapper"><img className="slider-list__item__thumbnail" src="https://static.vieon.vn/vieplay-image/thumbnail_v4/2020/09/14/9u23vx60_khatkhaohanhphuc1920x1080_296_168.webp" /></div>
          <div className="slider-list__item__title">Winter Story</div>
        </div>
        <div className="slider-list__item">
          <div class="slider-thumbnail-wrapper"><img className="slider-list__item__thumbnail" src="https://static.vieon.vn/vieplay-image/thumbnail_v4/2020/09/14/9u23vx60_khatkhaohanhphuc1920x1080_296_168.webp" /></div>
          <div className="slider-list__item__title">Winter Story</div>
        </div>
      </Slider>
    </div>

  );
}

export default MovieSlider;