import React from 'react';
import './mentors.css';

import mentor1 from "../../assets/mentor1.png";
import mentor2 from "../../assets/mentor2.png";
import mentor3 from "../../assets/mentor3.png";


const Mentors = () => {
    return (
        <div className='mentors_section' id='team'>
            <div className='mentors_title'>
                <h1>Instructors</h1>
                <p>Our instructors come with extensive industry experience and help you learn the
                    fundamentals of product management in a cohort-learning environment.</p>
            </div>
            <div className='instructor-container'>
                <div className="item">
                    <div className="image-container">
                        <img src={mentor1} alt="name" />
                    </div>
                </div>


                <div className="item">
                    <div className="image-container">
                        <img src={mentor2} alt="name" />
                    </div>
                </div>


                <div className="item">
                    <div className="image-container">
                        <img src={mentor3} alt="name" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mentors;