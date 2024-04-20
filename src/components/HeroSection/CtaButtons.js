import React from 'react';
import './index.css';

const CtaButtons = ({ onDownloadClick, onPlayDemoClick }) => {
  return (
    <div className="cta">
      <div className="frame-10" onClick={onDownloadClick}>
        <span className="download-app">
          Download App
        </span>
      </div>
      <div className="cta-1" onClick={onPlayDemoClick}>
        <img className="octiconplay-24" src="/images/octicon_play-24.png" />
        <div className="play-demo">
          Play Demo
        </div>
      </div>
    </div>
  );
};

export default CtaButtons;
