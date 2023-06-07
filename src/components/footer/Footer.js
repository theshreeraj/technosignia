import React from 'react';
import gpt3Logo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
    <div className="gpt3__footer section__padding">
        {/* <div className="gpt3__footer-heading">
            <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        </div>

        <div className="gpt3__footer-btn">
            <p>Request Early Access</p>
        </div> */}

        <div className="gpt3__footer-links">
            <div className="gpt3__footer-links_logo">
                <img src={gpt3Logo} alt="gpt3_logo" />
                <p>A step toward success. <br /> All Rights Reserved</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Links</h4>
                <p>Instagram</p>
                <p>LinkedIn</p>
                <p>Facebook</p>
                <p>Twitteer</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Company</h4>
                <p>Terms & Conditions </p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Get in touch</h4>
                <p>Office 101,first floor, Valencia commercial complex, Wakad, Dange Chowk Rd, near Maharaja Hotel, Thergaon, Maharashtra 411033</p>
                <p>+91 8888981430</p>
                <p>technosignia@gmail.com</p>
            </div>
        </div>

        <div className="gpt3__footer-copyright">
            <p>@2023 Technosignia. All rights reserved.</p>
        </div>
    </div>
);

export default Footer;
