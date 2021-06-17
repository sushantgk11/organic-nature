import React from 'react';
import '../Styles/About.css';
import leaf from '../Assets/Group 114.png';
import card1 from '../Assets/Group 207.png';
import card2 from '../Assets/Group 205.png';
import Aos from 'aos/dist/aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




function About(){
useEffect(() => {
    Aos.init({
        duration : 1000
      })
}, [])
    return(<>
    <div className="about" >
        <div className="para-content" data-aos='fade-down'>
            <img src={leaf} alt="" />
            <h1>Welcome to Nature</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="details" >
            <div className="image" data-aos='flip-right'><img src={card1} alt="" /></div>
            <div className="image" data-aos='flip-right'><img src={card2} alt="" /></div>
            <div className="image" data-aos='flip-right'><img src={card1} alt="" /></div>
            <div className="image" data-aos='flip-right'><img src={card1} alt="" /></div>
            
            
        </div>
    </div>
    </>)
}

export default About;