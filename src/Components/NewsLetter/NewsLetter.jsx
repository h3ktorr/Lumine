import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1 className="newsletter-big">
        Sign up now to get alerts <br /> for new product drops
      </h1>
      <h1 className="newsletter-small">
        Sign up now to get alerts for new product drops
      </h1>
      <div className="newsletter-input">
        <input type="email" placeholder="Enter Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter