import React from "react";
import "../Styles/Blog.css";
import leaf from "../Assets/Group 114.png";
import img1 from "../Assets/blog_img1.png";
import img2 from "../Assets/blog_img2.png";
import img3 from "../Assets/blog_img3.png";
import Aos from 'aos/dist/aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Blog() {
    useEffect(() => {
        Aos.init({
            duration : 700
          })
    }, [])
  return (
    <>
      <div className="our-blog">
        <div className="para-content" data-aos='fade-up'>
          <img src={leaf} alt="" />
          <h1>Read Our Blog</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="blog-details">
          <div className="card" data-aos='flip-right'>
            <div className="card-img">
              <img src={img1} alt="" />
            </div>
            <div className="card-details" >
              <h2>Blog Post One</h2>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <p className="read-more">Read More</p>
              <hr></hr>
            </div>
          </div>
          <div className="card" data-aos='flip-right'>
            <div className="card-img">
              <img src={img2} alt="" />
            </div>
            <div className="card-details">
              <h2>Blog Post Two</h2>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <p className="read-more">Read More</p>
              <hr></hr>
            </div>
          </div>
          <div className="card" data-aos='flip-right'>
            <div className="card-img">
              <img src={img3} alt="" />
            </div>
            <div className="card-details">
              <h2>Blog Post Three</h2>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <p className="read-more">Read More</p>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
