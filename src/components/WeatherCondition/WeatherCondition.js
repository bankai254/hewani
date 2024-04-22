import React from 'react'

import PropTypes from 'prop-types'

import './WeatherCondition.scss'

const WeatherCondition = (props) => {
  const { imageAlt, imageSrc, condition, title } = props
  return condition && title ? (
    <div className={`weather-condition-container`}>
      {imageSrc && <img alt={imageAlt} src={imageSrc} className="weather-condition-image" />}
      <h2 className="weather-condition-text">{condition}</h2>
      <span className="weather-condition-text1">{title}</span>
    </div>
  ) : <></>
}

WeatherCondition.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  condition: PropTypes.any,
}

export default WeatherCondition
