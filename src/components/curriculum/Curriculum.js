import React from 'react';
import "./curriculum.css";

import amazon from "../../assets/cousemodule/amazon.png";
import flipkart from "../../assets/cousemodule/flipkart.png";
import google from "../../assets/cousemodule/google.png";
import tesla from "../../assets/cousemodule/tesla.png";
import toyota from "../../assets/cousemodule/toyota.png";
import youtube from "../../assets/cousemodule/youtube.png";

const Curriculum = () => {
    return (
        <>
            <div className="timeline">
                <div className="timeline-container left-container ">
                    <img src={google} alt="rimage" />
                    <div className="text-box voilet">
                        <h2>Module 1</h2>
                        {/* <small>Week 1</small> */}
                        <p>Basics of selenium webdriver</p>
                        <p>Fundamentals of Java</p>
                        <p>How to ssdfr and python some text</p>
                        <p>How to ssdfr and python some text</p>
                        {/* <span className="left-container-arrow"></span> */}
                    </div>
                </div>

                <div className="timeline-container right-container">
                    <img src={toyota} alt="simage" />
                    <div className="text-box blue">
                        <h2>Module 2</h2>
                        {/* <small>2018-2019</small> */}
                        <p>Basics of selenium webdriver</p>
                        <p>Fundamentals of Java</p>
                        <p>How to ssdfr and python some text</p>
                        <p>How to ssdfr and python some text</p>
                        {/* <span className="right-container-arrow"></span> */}
                    </div>
                </div>

                <div className="timeline-container left-container">
                    <img src={amazon} alt="dimage" />
                    <div className="text-box yellow">
                        <h2>Module 3</h2>
                        {/* <small>2018-2019</small> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi, voluptates quia</p>
                        {/* <span className="left-container-arrow"></span> */}
                    </div>
                </div>

                <div className="timeline-container right-container">
                    <img src={tesla} alt="timage" />
                    <div className="text-box green">
                        <h2>Module 4</h2>
                        {/* <small>2018-2019</small> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi, voluptates quia</p>
                        {/* <span className="right-container-arrow"></span> */}
                    </div>
                </div>


                <div className="timeline-container left-container">
                    <img src={flipkart} alt="gimage" />
                    <div className="text-box voilet">
                        <h2>Module 5</h2>
                        {/* <small>2018-2019</small> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi, voluptates quia</p>
                        {/* <span className="left-container-arrow"></span> */}
                    </div>
                </div>


                <div className="timeline-container right-container">
                    <img src={youtube} alt="himage" />
                    <div className="text-box blue">
                        <h2>Youtube</h2>
                        {/* <small>2018-2019</small> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi, voluptates quia</p>
                        {/* <span className="right-container-arrow"></span> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Curriculum;