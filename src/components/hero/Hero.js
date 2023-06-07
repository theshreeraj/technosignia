import React from 'react';
import people from '../../assets/people.png';
import herobanner from "../../assets/hero-banner.png"
import './hero.css';

const Hero = () => (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            <h1 className="gradient__text">Launch your IT carrier with us.</h1>
            <p>some lorem ipsum text some lorem ipsum text some lorem ipsum text </p>

            {/* <div className="gpt3__header-content__input">
                <input type="email" placeholder="Your Email Address" />
                <button type="button">Get Started</button>
            </div> */}

            <div className="gpt3__header-content__people">
                <img src={people} />
                <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>

        <div className="gpt3__header-image">
            <img src={herobanner} />
        </div>
    </div>
);

export default Hero;
