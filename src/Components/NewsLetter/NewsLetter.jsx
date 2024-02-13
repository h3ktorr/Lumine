import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>
        Sign up now to get alerts <br /> for new product drops
      </h1>
      <div className="newsletter-input">
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter