import React from 'react';
import './courses.css';

import { Link } from 'react-router-dom';

import testing from "../../assets/testing.png";
import development from "../../assets/development.png";

const Courses = () => {
    return (
        <div className=".courses_container">
            <div className="coursecontainer">
                <Link to="/javatest">
                    <div className="item">
                        <div className="image-container">
                            <img src={testing} alt="name" />
                        </div>
                    </div>
                </Link>

                <Link to="/javadev">
                    <div className="item">
                        <div className="image-container">
                            <img src={development} alt="name" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Courses;









