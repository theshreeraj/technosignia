import React from 'react';
import "./clients.css";

import clients1 from "../../assets/clients1.png";
import clients2 from "../../assets/clients2.png";
import clients3 from "../../assets/clients3.png";
import clients4 from "../../assets/clients4.png";
import clients5 from "../../assets/clients5.png";
import clients6 from "../../assets/clients6.png";
import clients7 from "../../assets/clients7.png";
import clients8 from "../../assets/clients8.png";
import clients9 from "../../assets/clients9.png";


const Clients = () => {
    return (
        <div className="client_slider">
            <div className="client_slide-track">
                <div className="client_slide">
                    <img src={clients1} alt="#" />
                </div>
                <div className="client_slide">
                    <img src={clients2} alt="#" />
                </div>
                <div className="client_slide">
                    <img src={clients3} alt="#" />
                </div>
                <div className="client_slide">
                    <img src={clients4} alt="#" />
                </div>
                <div className="client_slide">
                    <img src={clients5} alt="#" />
                </div>
                <div className="client_slide">
                    <img src={clients6} alt="#" />
                </div>
                <div className="client_slide">
                    <img src={clients7} alt="#" />
                </div>
                <div className="client_slide">
                    <img src={clients8} alt="#" />
                </div>
                <div className="client_slide">
                    <img src={clients9} alt="#" />
                </div>
                <div className="client_slide">
                    <img src={clients1} alt="#" />
                </div>
                <div className="client_slide">
                    <img src={clients2} alt="#" />
                </div>
                <div className="client_slide">
                    <img src={clients3} alt="#" />
                </div>
                <div className="client_slide">
                    <img src={clients4} alt="#" />
                </div>
                <div className="client_slide">
                    <img src={clients5} alt="#" />
                </div>
            </div>
        </div>
    )
}

export default Clients