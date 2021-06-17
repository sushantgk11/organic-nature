import React from "react";
import "../Styles/Footer.css";
import logo from '../Assets/Group 225.png';
import facebook from '../Assets/Group 99.png';
import linkedin from '../Assets/Group 100.png';
import instagram from '../Assets/Group 105.png';

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
          <div className="column-1">
            <div className="logo">
              <img src={logo} alt="" />
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <hr></hr>
              <p className='copyright'>© Copyright 2020 Nature</p>
            </div>
          </div>
          <div className="column-2">
            <h3>Information</h3>
            <hr></hr>
            <ul className="list-1">
                <li>About Us</li>
                <li>Products</li>
                <li>Contact Us</li>
                <li>Terms of Service</li>
            </ul>
            <ul className="list-2">
                <li>Testimonial</li>
                <li>Blog</li>
            </ul>
          </div>
          <div className="column-3">
              <h3>Follow Us</h3>
              <hr></hr>
              <img src={facebook} alt="" /><img src={linkedin} alt="" /><img src={instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
