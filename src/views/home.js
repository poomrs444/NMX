import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Sharp Needy Falcon</title>
        <meta property="og:title" content="Sharp Needy Falcon" />
      </Helmet>
      <Header></Header>
      <div className="home-banner">
        <h1 className="home-text">Welcome To NMX Community</h1>
        <span className="home-text1">ชีวิตดีๆต้องไม่มีพวกกู</span>
        <div className="home-btn-group">
          <Link to="/about" className="home-navlink button">
            Get Started
          </Link>
          <button className="home-button button">Learn More</button>
        </div>
      </div>
      <div className="home-gallery-card">
        <div className="home-container1"></div>
        <img
          alt="image"
          src="/playground_assets/line_album_2022_0.7.22_220727-1500h.jpg"
          className="home-image"
        />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
