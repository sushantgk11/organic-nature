import React from "react";
import "../Styles/Product.css";
// import $ from "jquery";
import Slider from "react-slick";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../Assets/Group 39.png";
import img2 from "../Assets/Group 64.png";
import img3 from "../Assets/Group 55.png";
import Aos from 'aos/dist/aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Product() {
  let setting = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    Aos.init({
        duration : 700
      })
}, [])
  return (
    <>
      <div className="product">
        <div className="para-content" data-aos='fade-up'>
          <h1>Proudly presented by</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="slider">
          <Slider {...setting} className="inner-slider" >
            <div className="slide-item">
              <div className="inner-item">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="slide-item" >
              <div className="inner-item">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="slide-item">
              <div className="inner-item">
                <img src={img3} alt="" />
              </div>
            </div>
            <div className="slide-item">
              <div className="inner-item">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="slide-item">
              <div className="inner-item">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="slide-item">
              <div className="inner-item">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="slide-item">
              <div className="inner-item">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="slide-item">
              <div className="inner-item">
                <img src={img3} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Product;
