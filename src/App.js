import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Layouts/Header';
import HeroText from './components/HeroSection';
import Mission from './components/Mission';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './Layouts/Footer';
import './App.css';
import Main from './Layouts/Main';

function App() {
  const navItems = [
    { path: '/', label: 'Home', className: 'home' },
    { path: '/about', label: 'About Us', className: 'about-us' },
    { path: '/services', label: 'Services', className: 'services' },
    { path: '/blog', label: 'Blog', className: 'blog' },
    { path: '/contact', label: 'Contact Us', className: 'contact-us' },
    // Add more navigation items as needed
  ];
  return (
    <Router>
      <div className="App">
        <Header navItems={navItems} />
        <div className='container'>
      
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/hero" element={<HeroText />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
