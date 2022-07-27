import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink">
        {props.text}
      </Link>
      <Link to="/about" className="navigation-links-navlink1">
        {props.text1}
      </Link>
      <Link to="/learn" className="navigation-links-navlink2">
        {props.text2}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Learn More',
  text: 'Home',
  rootClassName: '',
  text1: 'About',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
