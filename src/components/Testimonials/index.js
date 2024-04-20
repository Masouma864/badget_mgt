// TestimonialsComponent.js
import React from 'react';
import './index.css';
import Testimonials from './Testimonial';

const testimonialsContainer = () => {
  const testimonialsData = [
    {
      id: 1,
      backgroundImage:'url(/images/bg.png)' ,
      content: 'I love this budgeting app; it\'s incredibly user friendly and has helped me gain control over my finances. Setting and tracking my budget has never been easier.',
      user: 'Nora James',
      company: 'Grower.io'
    },
    {
      id: 2,
      backgroundImage: 'url(/images/bg1.png)' ,
      content: 'This app seamlessly syncs with my bank accounts, saving me a lot of manual data entry. The security features are top-notch, which gives me peace of mind.',
      user: 'Arkins Boo',
      company: 'DLDesign.co'
    },
    // Add more testimonials as needed
  ];
  
  return (
    <div>
         <div className="frame-1781">
        <div className="testimonials">
          Testimonials
        </div>
        <div className="frame-153">
          <div className="what-our-clients-say-about-us">
            What our clients say About Us
          </div>
          <div className="rectangle-75">
          </div>
        </div>
      </div>
   
  <Testimonials testimonialsData={testimonialsData} />
  
  </div>
  );
};

export default testimonialsContainer;
