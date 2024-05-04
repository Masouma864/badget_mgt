import './index.css'
import React from 'react'
import HeroText from '../../components/HeroSection';
import Services from '../../components/Services';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';
import Mission from '../../components/Mission';

export default function Main() {
    return (
        <div className='container'>
            <div className="landing-page-1">

                <HeroText />
                <Mission />
                <Services />
                <Testimonials />
                <Contact />
                
            </div>
        </div>
    )
}