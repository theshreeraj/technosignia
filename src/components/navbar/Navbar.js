import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt='logo' />
                </div>
                <div className="gpt3__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#courses">Courses</a></p>
                    <p><a href="#placements">Placements</a></p>
                    <p><a href="#hire">Hire</a></p>
                    <p><a href="#community">Community</a></p>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <button type="button">Join Us</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#wgpt3">Courses</a></p>
                            <p><a href="#possibility">Placements</a></p>
                            <p><a href="#features">Hire</a></p>
                            <p><a href="#blog">Community</a></p>
                        </div>
                        <div className="gpt3__navbar-menu_container-links-sign">
                            <button type="button">Join Us</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
