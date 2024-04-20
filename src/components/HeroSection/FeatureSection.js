import React from 'react';
import './index.css';

const FeatureSection = () => {
    const features = [
        { id: 1, text: 'Track Expenses' },
        { id: 2, text: 'Budget Creation' },
        { id: 3, text: 'Save More' }
      ];
  return (
    <div className="group-27">
    <div className="iphone-13-mini-1">
    </div>
    {features.map(feature => (
        <div key={feature.id} className={`frame-${feature.id + 173}`}>
          <span className={`feature-item-${feature.id}`}>
            {feature.text}
          </span>
        </div>
      ))}
    <div className="budget-1">
    </div>
  </div>
  );
};

export default FeatureSection;
