import React from 'react';

const ServiceContent = ({ title, description }) => {
  return (
   
    <div className="content-3">
          <div className="section-title-1">
            <div className="services3-title">
            {title}
            </div>
            <div className="rectangle-781">
            </div>
            <span className="services3-desc">
            {description}
            </span>
          </div>
          <div className="cta-3">
            <span className="learn-more-3">
              learn More
            </span>
          </div>
        </div>

  );
}

export default ServiceContent;
