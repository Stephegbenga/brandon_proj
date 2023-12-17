import React from 'react'

import { Helmet } from 'react-helmet'

import './index.css'

const Index = (props) => {
  return (
    <div className="index-container">
      <Helmet>
        <title>index - Brogan clothing</title>
        <meta property="og:title" content="index - Brogan clothing" />
      </Helmet>
      <div className="index-nav-bar">
        <img
          alt="image"
          src="/brogan%20white%20logo.svg"
          className="index-image"
        />
        <div className="index-phone-container">
          <img
            alt="pastedImage"
            src="/external/pastedimage-r48.svg"
            className="index-pasted-image"
          />
          <span className="index-text">(585) 479-0891</span>
        </div>
      </div>
      <img
        alt="pastedImage"
        src="/external/pastedimage-5d3-1500w.png"
        className="index-pasted-image1"
      />
    </div>
  )
}

export default Index
