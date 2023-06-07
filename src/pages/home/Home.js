import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Clients from "../../components/clients/Clients";
import Why from "../../components/why/Why";
import Courses from "../../components/courses/Courses";
import Students from "../../components/students/Students";
import Mentors from "../../components/mentors/Mentors";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
import Whatsapp from '../../components/whatsapp/Whatsapp';
import './home.css';
import CTA from '../../components/cta/CTA';
import Hire from '../../components/hire/Hire';
import Expanding from '../../components/expanding-card/Expanding';

const Home = () => {
    return (
        <div>
            <div className='gradient__bg'>
                <Navbar />
                <Hero />
            </div>
            <Courses />
            <CTA />
            <div className='students__container'>
                <Students />
            </div>
            <Mentors />
            <Why />
            <Clients />
            <Faq />
            <Expanding />
            <Hire />
            <Footer />
            <Whatsapp />
        </div>
    )
}

export default Home