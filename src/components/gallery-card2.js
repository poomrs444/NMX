import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card2.css'

const GalleryCard2 = (props) => {
  return (
    <div className={`gallery-card2-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src="/playground_assets/line_album_2022.7.22_220727-1500w.jpg"
        className="gallery-card2-image"
      />
      <h2 className="gallery-card2-text">{props.title}</h2>
      <span className="gallery-card2-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard2.defaultProps = {
  image_alt: '',
  subtitle: 'Lorem ipsum dolor sit amet',
  title: 'Mhee mecha',
  rootClassName: '',
}

GalleryCard2.propTypes = {
  image_alt: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default GalleryCard2
