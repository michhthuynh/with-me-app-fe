import React from 'react';
import PropTypes from 'prop-types';

Slider.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

Slider.defaultProps = {
  items: [],
  title: ''
}

function Slider(props) {
  const { items, title } = props

  const handleClickPre = () => {
    console.log('running 1')
  }

  const handleClickNext = () => {
    console.log('running 2')
  }

  return (
    <div className="slider-wrapper">
      <div className="slider-title">{title}</div>
      <div className="slider-content">
        <button onClick={handleClickPre}>Pre</button>
        <button onClick={handleClickNext}>Next</button>
      </div>
    </div>
  );
}

export default Slider;