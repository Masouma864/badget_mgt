import React from 'react';

const EllipsesFrame = ({ count, handleEllipseClick }) => {
    return (
        <div className="frame-124">
            {[...Array(count)].map((_, index) => (
                <Ellipse key={index} className={`ellipse-${index + 56}`} onClick={() => handleEllipseClick(index)} />
            ))}
        </div>
    );
};

const Ellipse = ({ className, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            {/* Add any content or styles for the ellipse here */}
        </div>
    );
};

export { EllipsesFrame, Ellipse };
