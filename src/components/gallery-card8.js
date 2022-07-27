import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card8.css'

const GalleryCard8 = (props) => {
  return (
    <div className={`gallery-card8-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src="/playground_assets/line_album_2022_8.7.22_220727-1500w.jpg"
        className="gallery-card8-image"
      />
      <h2 className="gallery-card8-text">{props.title}</h2>
      <span className="gallery-card8-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard8.defaultProps = {
  subtitle: 'Lorem ipsum dolor sit amet',
  image_alt: '',
  title: 'OPAL THUNWARAT',
  rootClassName: '',
}

GalleryCard8.propTypes = {
  subtitle: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default GalleryCard8
