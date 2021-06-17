import React from 'react';
import '../Styles/Home.css';
import logo from '../Assets/Group 228.png';
import flower from '../Assets/Group 195.png';

function Home(){

    return(<>
    <div className="home">
        <div className="contents">
            <div className="para-contents">
                <p className="healthy-life-with">Healthy life with </p>
                <h1>Nature Organic</h1>
                <p className="description">Vegetables are the edible parts of a plant 
                that is used in cooking or can be eaten now.</p>
                <button className="explore-now">Explore Now</button>
            </div>
            <div className="img-contents">
            <img src={flower} alt="" className="flower"/>
                <div className="logo-container">
                    <div className="inner-container">
                    <img src={logo} alt="" />
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
    </>)
}

export default Home;