import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card4.css'

const GalleryCard4 = (props) => {
  return (
    <div className={`gallery-card4-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src="/playground_assets/line_album_2022_7.7.22_220727-1500w.jpg"
        className="gallery-card4-image"
      />
      <h2 className="gallery-card4-text">{props.title}</h2>
      <span className="gallery-card4-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard4.defaultProps = {
  title: 'PLENGMARCHX',
  subtitle: 'Lorem ipsum dolor sit amet',
  image_alt: '',
  rootClassName: '',
}

GalleryCard4.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default GalleryCard4
