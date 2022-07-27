import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card6.css'

const GalleryCard6 = (props) => {
  return (
    <div className={`gallery-card6-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src="/playground_assets/line_album_2022_5.7.22_220727-1500w.jpg"
        className="gallery-card6-image"
      />
      <h2 className="gallery-card6-text">{props.title}</h2>
      <span className="gallery-card6-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard6.defaultProps = {
  subtitle: 'Lorem ipsum dolor sit amet',
  rootClassName: '',
  image_alt: '',
  title: 'PEE PEERAPOL',
}

GalleryCard6.propTypes = {
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
}

export default GalleryCard6
