// HeroText.js
import React from 'react';
import './index.css';
import CtaButtons from './CtaButtons';
import FeatureSection from './FeatureSection';

const HeroText = ({ onDownloadClick, onPlayDemoClick }) => {
  const handleDownloadClick = () => {
    // عملیات مورد نظری که باید هنگام کلیک بر روی دکمه Download انجام شود
  };
  
  const handlePlayDemoClick = () => {
    // عملیات مورد نظری که باید هنگام کلیک بر روی دکمه Play Demo انجام شود
  };
  
  return (
    <div className="frame-hero">
    
          <div className="hero-text">
            <div className="frame-166">
              <p className="the-ultimate-budgeting-companion">
                <span className="the-ultimate-budgeting-companion-sub-11">The</span><span className="the-ultimate-budgeting-companion-sub-10"> Ultimate</span><span> Budgeting </span><br/><span>Companion</span>
              </p>
              <span className="hero-text-section">
                Seamlessly  manage your funds , cut cost, manage your business easily </span>
                <span>and secure your finances where every penny counts . 
              </span>
            </div>
            <CtaButtons onDownloadClick={onDownloadClick} onPlayDemoClick={onPlayDemoClick} />
          </div>
          <FeatureSection/>
        </div>
     
  );
};

export default HeroText;

