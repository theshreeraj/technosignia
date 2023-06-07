import React from 'react';
import './javatest.css';
import Testheader from '../../components/courseheader/Testheader';
import Curriculum from '../../components/curriculum/Curriculum';
import Navbar from '../../components/navbar/Navbar';
import Offer from '../../components/offer/Offer';
import Stories from '../../components/stories/Stories';
import Footer from '../../components/footer/Footer';


const Javatest = () => (
    <>
        <Navbar />
        <Testheader />
        <Curriculum />
        <Offer />
        <Stories />
        <Footer />
    </>
);

export default Javatest;
