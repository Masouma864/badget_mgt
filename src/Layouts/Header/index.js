import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = ({ navItems }) => {
  return (
    <div className="hero-sec">
      <div className="navigation">
        <div className="black-logo-no-background-2">
          <div className="svgjs-g-22321">
            <img className="shape-1" src="/images/SvgjsG2232.png" alt='shap' />
          </div>
          <div className="svgjs-g-22331">
            <img className="vector-1" src="/images/SvgjsG2233.png" />
          </div>
        </div>
        <div className="nav">
         
          {navItems.map((item, index) => (
            <div key={index} className={`frame-${index + 159}`}>
              <Link to={item.path} className={item.className}>
                {item.label}
              </Link>
            </div>
          ))}
        </div>
        <div className="sign-up">
          <Link to="/signup" className="sign-up-1">
            Sign Up
          </Link>
        </div>
        <div className="menu-11">
          <img className="shape-1" src="/images/menu-11.png" alt='shap' />
        </div>
      </div>
    </div>
  );
};

export default Header;
