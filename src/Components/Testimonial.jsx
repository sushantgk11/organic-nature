import React from "react";
import "../Styles/Testimonial.css";
import Slider from "react-slick";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import comma from "../Assets/Group 86.png";
import profile1 from "../Assets/profile1.jpg";
import profile2 from "../Assets/profile2.jpg";
import profile3 from "../Assets/profile3.jpg";
import profile4 from "../Assets/profile4.jpg";
import star from "../Assets/star5.png";
import Carousel from "react-elastic-carousel";

function Testimonial() {
  let setting = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true
  };
  return (
    <>
      <div className="testimonial">
        <Carousel className="carousel">
          <div className="item">
            <img className="comma" src={comma} alt="" />
            <img className="profile-image" src={profile1} alt="" />
            <h2>Jane Doe</h2>
            <img className="rating" src={star} alt="" />
            <p>
              Thank you for all the amazing produce and products you deliver
              each week… you make my life so easy an bring goodness into our
              family eating. I’ve been roasting a lot of brussel sprouts and
            </p>
          </div>
          <div className="item">
            <img className="comma" src={comma} alt="" />
            <img className="profile-image" src={profile2} alt="" />
            <h2>Jane Doe</h2>
            <img className="rating" src={star} alt="" />
            <p>
              Thank you for all the amazing produce and products you deliver
              each week… you make my life so easy an bring goodness into our
              family eating. I’ve been roasting a lot of brussel sprouts and
            </p>
          </div>
          <div className="item">
            <img className="comma" src={comma} alt="" />
            <img className="profile-image" src={profile3} alt="" />
            <h2>Jane Doe</h2>
            <img className="rating" src={star} alt="" />
            <p>
              Thank you for all the amazing produce and products you deliver
              each week… you make my life so easy an bring goodness into our
              family eating. I’ve been roasting a lot of brussel sprouts and
            </p>
          </div>
          <div className="item">
            <img className="comma" src={comma} alt="" />
            <img className="profile-image" src={profile4} alt="" />
            <h2>Jane Doe</h2>
            <img className="rating" src={star} alt="" />
            <p>
              Thank you for all the amazing produce and products you deliver
              each week… you make my life so easy an bring goodness into our
              family eating. I’ve been roasting a lot of brussel sprouts and
            </p>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Testimonial;
