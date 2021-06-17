import React from "react";
import "../Styles/Newsletter.css";
import Aos from 'aos/dist/aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Newsletter() {
    useEffect(() => {
        Aos.init({
            duration : 1000
          })
    }, [])
  return (
    <>
      <div className="container"data-aos='slide-right' >
        <h1>Subscribe to Our Newsletter</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="my-input">
        <input type="text" name="" id="input" placeholder="Enter Your Email" />
        <button>Subscribe</button>
        </div>
        
      </div>
    </>
  );
}

export default Newsletter;
