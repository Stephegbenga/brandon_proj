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
      <div className="index-body">
        <img
          alt="pastedImage"
          src="/external/sketches%20orange%20cammo%20big-400h.png"
          className="index-shoe5"
        />
        <div className="index-sublogo-container">
          <img
            alt="image"
            src="/brogan%20white%20logo.svg"
            className="index-image1"
          />
        </div>
        <div className="index-shoes-container">
          <img
            alt="pastedImage"
            src="/external/pastedimage-09tg.svg"
            className="index-shoe1"
          />
          <img
            alt="pastedImage"
            src="/external/pastedimage-a6hg.svg"
            className="index-shoe2"
          />
          <img
            alt="pastedImage"
            src="/external/pastedimage-82ts.svg"
            className="index-shoe3"
          />
          <img
            alt="pastedImage"
            src="/external/pastedimage-jh5y.svg"
            className="index-shoe4"
          />
          <img
            alt="pastedImage"
            src="/external/sketches%20orange%20cammo%20big-400h.png"
            className="index-shoe51"
          />
        </div>
        <span className="index-text1">
          We make high-quality Scandinavian design-centered streetwear products
          for conscious minimalistic consumption. We are constantly rethinking
          casual wear design and material development to accelerate creating
          your own experience.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <div className="index-footer">
          <span className="index-text2">
            Copyright 2023 Brogan
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Index
