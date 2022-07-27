import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import GalleryCard1 from '../components/gallery-card1'
import GalleryCard2 from '../components/gallery-card2'
import GalleryCard3 from '../components/gallery-card3'
import GalleryCard4 from '../components/gallery-card4'
import GalleryCard5 from '../components/gallery-card5'
import GalleryCard6 from '../components/gallery-card6'
import GalleryCard7 from '../components/gallery-card7'
import GalleryCard8 from '../components/gallery-card8'
import GalleryCard9 from '../components/gallery-card9'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Sharp Needy Falcon</title>
        <meta property="og:title" content="About - Sharp Needy Falcon" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="about-gallery">
        <GalleryCard1 rootClassName="gallery-card1-root-class-name1"></GalleryCard1>
        <GalleryCard2 rootClassName="gallery-card2-root-class-name1"></GalleryCard2>
        <GalleryCard3 rootClassName="gallery-card3-root-class-name"></GalleryCard3>
        <GalleryCard4 rootClassName="gallery-card4-root-class-name1"></GalleryCard4>
        <GalleryCard5 rootClassName="gallery-card5-root-class-name"></GalleryCard5>
        <GalleryCard6 rootClassName="gallery-card6-root-class-name"></GalleryCard6>
        <GalleryCard7 rootClassName="gallery-card7-root-class-name"></GalleryCard7>
        <GalleryCard8 rootClassName="gallery-card8-root-class-name"></GalleryCard8>
        <GalleryCard9 rootClassName="gallery-card9-root-class-name"></GalleryCard9>
      </div>
      <img
        alt="image"
        src="/playground_assets/s__84836980-1400w.jpg"
        className="about-image"
      />
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default About
