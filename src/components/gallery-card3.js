import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card3.css'

const GalleryCard3 = (props) => {
  return (
    <div className={`gallery-card3-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src="/playground_assets/line_album_2022_3.7.22_220727-1500h.jpg"
        className="gallery-card3-image"
      />
      <h2 className="gallery-card3-text">{props.title}</h2>
      <span className="gallery-card3-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard3.defaultProps = {
  subtitle: 'Lorem ipsum dolor sit amet',
  rootClassName: '',
  image_alt: '',
  title: 'DD',
}

GalleryCard3.propTypes = {
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
}

export default GalleryCard3
