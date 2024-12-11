// RightSide.js
import React from "react";
import "../styles//RightSide.css";

const RightSide = () => {
  return (
    <div className="right-side">
      <div className="text-container">
        <p className="main-text">
          Book an appointment with <span className="gradient-text">lifestyle medicine</span> experts
          <p className="subtext">Optimize your lifestyle and reverse chronic diseases.</p>
        </p>
      </div>


      {/*<div className="search-bar">
        <div className="search-item">
          <span className="icon">🔍</span>
          <input type="text" placeholder="Condition, procedure, specialty..." />
        </div>
        <div className="search-item">
          <span className="icon">📍</span>
          <input type="text" placeholder="City, state, or zipcode" />
        </div>
        <div className="search-item">
          <span className="icon">💬</span>
          <input type="text" placeholder="Insurance carrier details" />
        </div>
        <div className="search-item find-now">
          <span className="icon">🔍</span>
          <input type="text" placeholder="Find Now" />
        </div>
      </div>*/}
    </div>
  );
};

export default RightSide;
