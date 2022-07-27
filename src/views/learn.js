import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './learn.css'

const Learn = (props) => {
  return (
    <div className="learn-container">
      <Helmet>
        <title>Learn - Sharp Needy Falcon</title>
        <meta property="og:title" content="Learn - Sharp Needy Falcon" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="learn-banner">
        <h2 className="learn-text">
          <span className="learn-text1">
            STOP !!!
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="learn-text2">We warned you</span>
          <span className="learn-text3">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h2>
      </div>
      <div className="learn-gallery">
        <div className="learn-container01">
          <div className="learn-container02"></div>
        </div>
        <div className="learn-container03">
          <div className="learn-container04"></div>
        </div>
        <div className="learn-container05">
          <div className="learn-container06"></div>
        </div>
        <div className="learn-container07">
          <div className="learn-container08"></div>
        </div>
        <div className="learn-container09">
          <div className="learn-container10"></div>
        </div>
        <div className="learn-container11">
          <div className="learn-container12"></div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Learn
