import React from 'react';
import '../styles/Works.css';

const Work = () => {
  return (
    <div>
      {/* Section Separator */}
      <div className="section-separator"></div>
      <div className="how-it-works-section">
        {/* Section Title */}
        <p className="how-it-works">HOW IT WORKS</p>
        <h2 className="six-pillars-container">
          <span className="six-pillars-title">Lifestyle as medicine:</span>
          <span className="normal-text">The six pillars</span>
        </h2>
        <div>
            <img src={'/assets/arrowl.png'} alt="leftarrow" className="arrow-button1" />
          </div>
          <div>
            <img src={'/assets/arrowr.png'} alt="rightarrow" className="arrow-button2" />
        </div>

        {/* Horizontal Box with Items */}
        <div className="horizontal-box">
          <div className="pillars-item black">Nutrition</div> {/* to exactly get the "Nutrition" box alone black like the output given. but can change the name of the className to "pillars-item white" to get white box and the color changing transition when hovered for the "Nutritin" box*/}
          <div className="pillars-item white">Physical activity</div>
          <div className="pillars-item white">Restorative sleep</div>
          <div className="pillars-item white">Stress management</div>
          <div className="pillars-item white">Social connection</div>
          <div className="pillars-item white">Substance abuse</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
