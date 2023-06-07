import React from 'react';
import './offer.css';

const Offer = () => (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            <h1>Ready to take the next step in your carrier</h1>
            <p>Top-notch course curriculum</p>
            <p>Live interactive sessions with industry experts and peers</p>
            <p>Recordings, resources, projects, all at one place.</p>
            <p>Access to exclusive Technosignia Community</p>
        </div>

        <div className="gpt3__header-image">
            <div class="offer-card">
                <div class="offer-container-card">
                    {/* <!-- <img src="./javadev.png" alt="sone" /> --> */}
                    <p class="offer-card-title">Exciting early bird offers</p>
                    <button class="offer-card-button">Apply Now</button>
                    <p class="offer-card-description">Friendly EMI options available.</p>
                </div>
            </div>
        </div>
    </div>
);

export default Offer;
