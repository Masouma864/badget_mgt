// HeroText.js
import React from 'react';
import './index.css';
import CtaButtons from './CtaButtons';
import FeatureSection from './FeatureSection';

const HeroText = ({ onDownloadClick, onPlayDemoClick }) => {
  const handleDownloadClick = () => {
    // Add functionality for download click event
  };
  
  const handlePlayDemoClick = () => {
    // Add functionality for play demo click event
  };
  
  return (
    <div className="frame-hero">
      <div className="hero-text">
        <div className="frame-166">
          <p className="the-ultimate-budgeting-companion">
            <span className="the-ultimate-budgeting-companion-sub-11">The</span><span className="the-ultimate-budgeting-companion-sub-10"> Ultimate</span><span> Budgeting </span><br/><span>Companion</span>
          </p>
          <div className='hero-content'>
            <span className="hero-text-section">
              Seamlessly manage your funds, cut costs, easily manage your business,
              and secure your finances where every penny counts.
            </span>
          </div>
        </div>
        <CtaButtons onDownloadClick={onDownloadClick} onPlayDemoClick={onPlayDemoClick} />
      </div>
      <FeatureSection/>
    </div>
  );
};

export default HeroText;