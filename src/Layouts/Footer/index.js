// FooterComponent.js
import React from 'react';
import './index.css'
import FooterLinks from './FooterLInks';

const Footer = () => {
  const columns = [
    {
      heading: 'Quick Links',
      links: [
        { text: 'About', icon: '', iconSrc: '' },
        { text: 'Features', icon: '', iconSrc: '' },
        { text: 'Download', icon: '', iconSrc: '' },
        { text: 'Blog', icon: '', iconSrc: '' },
        { text: 'FAQS', icon: '', iconSrc: '' }
      ]
    },
    {
      heading: 'Resources',
      links: [
        { text: 'Demo', icon: '', iconSrc: '' }, // Add your other links
        { text: 'Customers', icon: '', iconSrc: '' },
        { text: 'Live Chat', icon: '', iconSrc: '' },
        { text: 'Unlimited support', icon: '', iconSrc: '' },
        { text: 'User Analytics', icon: '', iconSrc: '' }
      ]
    },
    {
      heading: 'Follow Us',
      links: [
        { text: 'Facebook', icon: 'facebook', iconSrc: 'images/facebook.png' },
        { text: 'Instagram', icon: 'instagram', iconSrc: 'images/instagram.png' },
        { text: 'Twitter', icon: 'twitter', iconSrc: 'images/twiter.png' },
        { text: 'LinkedIn', icon: 'linkedin', iconSrc: 'images/linkedin.png' },
        { text: 'Youtube', icon: 'youtube', iconSrc: 'images/youtube.png' }
      ]
    }
  ];

  return (
    <div className="footer-sec">
      <div className="card">
        <div className="newsletter">
          <div className="black-logo-no-background-3">
            <div className="svgjs-g-2232">
              <img className="shape" src="images/logo-name.png" alt="Shape" />
            </div>
            <div className="svgjs-g-2233">
              <img className="vector" src="images/logo.png" alt="Vector" />
            </div>
          </div>
          <div className="text">
            Join our newsletter to stay up to date on features and releases.
          </div>
          <div className="actions">
            <div className="form">
              <div className="text-input">
                <span className="placeholder">
                  Enter your email
                </span>
              </div>
              <div className="button">
                <span className="button-1">
                  Subscribe
                </span>
              </div>
            </div>
            <span className="text-1">
              By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
            </span>
          </div>
        </div>
        
        <FooterLinks columns={columns} />
      </div>
      <div className="row">
        <span className="text-2">
          © 2023 Fundnook. All rights reserved.
        </span>
        <div className="footer-links-2">
          <span className="link-25">
            Privacy Policy
          </span>
          <span className="link-26">
            Terms of Service
          </span>
          <span className="link-27">
            Cookies Settings
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
