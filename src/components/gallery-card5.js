import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card5.css'

const GalleryCard5 = (props) => {
  return (
    <div className={`gallery-card5-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src="/playground_assets/line_album_2022_4.7.22_220727-1500w.jpg"
        className="gallery-card5-image"
      />
      <h2 className="gallery-card5-text">{props.title}</h2>
      <span className="gallery-card5-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard5.defaultProps = {
  rootClassName: '',
  subtitle: 'Lorem ipsum dolor sit amet',
  title: 'ROTI DAddy',
  image_alt: '',
}

GalleryCard5.propTypes = {
  rootClassName: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
}

export default GalleryCard5
