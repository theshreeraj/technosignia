import React from 'react';
import "./testheader.css";

const Testheader = () => {
    return (
        <div className="gpt3__detailheader section__padding">
            <div className="gpt3__detailheader-heading">
                <h1>Become an Exceptional Java Developer</h1>
                <p>Master the art of product management and solve real-world problems.<br />
                    Learn essential skills, build a strong product portfolio, and crack your
                    next PM interview.</p>
            </div>

            <div className="gpt3__detailheader-btn">
                <p>Apply Now</p>
            </div>
            <div className="testing-ytcontainer">
                <iframe title='techvideo' height="400" width="600"
                    src="https://www.youtube.com/embed/O5hShUO6wxs">
                </iframe>
            </div>
        </div>
    )
}

export default Testheader;