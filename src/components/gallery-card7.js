import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card7.css'

const GalleryCard7 = (props) => {
  return (
    <div className={`gallery-card7-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src="/playground_assets/messageimage_1658939330202-1500w.jpg"
        className="gallery-card7-image"
      />
      <h2 className="gallery-card7-text">{props.title}</h2>
      <span className="gallery-card7-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard7.defaultProps = {
  image_alt: '',
  title: 'TIW HAWK EYE ตาเหี่ยว',
  subtitle: 'Lorem ipsum dolor sit amet',
  rootClassName: '',
}

GalleryCard7.propTypes = {
  image_alt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default GalleryCard7
