import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card9.css'

const GalleryCard9 = (props) => {
  return (
    <div className={`gallery-card9-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src="/playground_assets/line_album_2022_9.7.22_220727-1500w.jpg"
        className="gallery-card9-image"
      />
      <h2 className="gallery-card9-text">{props.title}</h2>
      <span className="gallery-card9-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard9.defaultProps = {
  subtitle: 'Lorem ipsum dolor sit amet',
  title: 'NGIMREAWANGIM',
  rootClassName: '',
  image_alt: '',
}

GalleryCard9.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default GalleryCard9
