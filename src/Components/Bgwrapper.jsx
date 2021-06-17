import React from 'react';
import '../Styles/Bgwrapper.css';
import Newsletter from './Newsletter';
import Testimonial from './Testimonial';

function Bgwrapper(){
    return(<>
        <div className="bg-container">
            <Testimonial />
            <Newsletter />
        </div>
    </>)
}

export default Bgwrapper