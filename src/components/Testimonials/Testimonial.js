import React, { useState } from 'react';
import './index.css';
import { EllipsesFrame, Ellipse } from './EllipsesComponent';

const Testimonials = ({ testimonialsData }) => {
  


    const [activeEllipseIndex, setActiveEllipseIndex] = useState(0);

    const handleEllipseClick = (index) => {
        setActiveEllipseIndex(index);
        // Add any other logic you want to perform when an ellipse is clicked
    };

    return (
        <div className="testimonials-1">
            <div className="frame-427320758">
                {testimonialsData.map((testimonial, index) => (

                    <div className="container-t">
                        <div className="bg" style={{
                            backgroundImage: testimonial.backgroundImage, backgroundSize: 'cover',
                            backgroundPosition: '50%',
                            backgroundRepeat: 'no-repeat'
                        }}></div>
                        <div className="content-4">
                            <div className="review">
                                {[...Array(5)].map((_, starIndex) => (
                                    <div key={starIndex} className={`star-${starIndex + 1}`}>
                                        <img className={`vector-${starIndex + 4}`} src="/images/star.png" alt="Star" />
                                    </div>
                                ))}
                            </div>
                            <div className="content4-desc">{testimonial.content}</div>
                            <div className="user">
                                <span className="nora-james">{testimonial.user}</span>
                                <div className="grower-io">{testimonial.company}</div>
                            </div>
                        </div>
                        <div className="content4-desc-mobile">{testimonial.content}</div>
                    </div>

                ))}
            </div>
            <EllipsesFrame count={3} handleEllipseClick={handleEllipseClick} />
        </div>
    );
};

export default Testimonials;

            <div className="frame-124">
                <div className="ellipse-56">
                </div>
                <div className="ellipse-59">
                </div>
                <div className="ellipse-60">
                </div>
            </div>

