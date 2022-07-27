import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-container">
        <div className="footer-logo">
          <h1 className="">{props.heading}</h1>
        </div>
        <div className="footer-links-container">
          <div className="footer-container1">
            <div className="footer-product-container">
              <span className="footer-text01">{props.text}</span>
              <span className="footer-text02">{props.text1}</span>
              <span className="footer-text03">{props.text2}</span>
              <span className="footer-text04">{props.text3}</span>
              <span className="">{props.text4}</span>
            </div>
            <div className="footer-company-container">
              <span className="footer-text06">{props.text5}</span>
              <span className="footer-text07">{props.text6}</span>
              <span className="footer-text08">{props.text7}</span>
              <span className="footer-text09">{props.text8}</span>
              <span className="">{props.text9}</span>
            </div>
          </div>
          <div className="footer-container2">
            <div className="footer-contact">
              <span className="footer-text11">{props.text10}</span>
              <span className="footer-text12">{props.text11}</span>
              <span className="">{props.text12}</span>
            </div>
            <div className="footer-socials">
              <span className="footer-text14">{props.text13}</span>
              <div className="footer-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="footer-icon"
                >
                  <path
                    d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                    className=""
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer-icon2"
                >
                  <path
                    d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                    className=""
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="footer-icon4"
                >
                  <path
                    d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-separator"></div>
      <span className="footer-text15">
        <span className="">© 2021 teleportHQ, All Rights Reserved.</span>
        <span className="footer-text17"></span>
        <span className=""></span>
      </span>
    </footer>
  )
}

Footer.defaultProps = {
  text11: 'hello@teleporthq.io',
  text2: 'Pricing',
  text1: 'Features',
  heading: 'NMX!!!',
  text13: 'Follow Us',
  text: 'Product',
  text7: 'Careers',
  text8: 'Contact',
  text5: 'Company',
  text4: 'Releases',
  text6: 'About',
  text9: 'Blog',
  text10: 'Contact Us',
  text3: 'Tutorials',
  rootClassName: '',
  text12: '+123 (4567) 890',
}

Footer.propTypes = {
  text11: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
  text13: PropTypes.string,
  text: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text5: PropTypes.string,
  text4: PropTypes.string,
  text6: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text12: PropTypes.string,
}

export default Footer
