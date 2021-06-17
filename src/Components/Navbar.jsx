import React from "react";
import brandImg from "../Assets/Group 220.png";
import "../Styles/Navbar.css";
import Home from '../Components/Home.jsx';
import About from '../Components/About.jsx';

function Navbar() {
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "15px 0 10px 0";
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("navbar").style.boxShadow = "0px 1px 5px 0px #00dbd0" ;

    
  } else {
    document.getElementById("navbar").style.padding = "8.6px 0 8.6px 0";
    document.getElementById("navbar").style.position = "relative";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.boxShadow = "0px 0px 0px 0px" ;
    
  }
}
  return (
    <>
      <nav id="navbar" className="navbar-wrapper">
        <input id="check" type="checkbox" name="check" />
        <label htmlFor="check">
          <i className="fa fa-bars" id="toggle"></i>
          <i className="fa fa-times" id="close"></i>
        </label>

        <div className="brand">
          <img src={brandImg} alt="" />
          <h2>organic</h2>
        </div>
        <ul className="link-wrapper">
          <li className="link-item" href="">Home</li>
          <li className="link-item">Products</li>
          <li className="link-item">Blogs</li>
          <li className="link-item" href="/About">About Us</li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
