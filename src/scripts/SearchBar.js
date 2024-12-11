import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaRegCommentDots } from 'react-icons/fa';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [insuranceCarrier, setInsuranceCarrier] = useState('');

  return (
    <div className="search-bar-container">
      {/* Magnifying Glass Section */}
      <div className="search-section">
        <span className="icon"><FaSearch /></span>
        <input
          type="text"
          className="search-input"
          placeholder="Condition, procedure, specialty..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Location Section */}
      <div className="search-section">
        <span className="icon"><FaMapMarkerAlt /></span>
        <input
          type="text"
          className="search-input"
          placeholder="City, state, or zipcode"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Insurance Carrier Section */}
      <div className="search-section">
        <span className="icon"><FaRegCommentDots /></span>
        <input
          type="text"
          className="search-input"
          placeholder="Insurance carrier"
          value={insuranceCarrier}
          onChange={(e) => setInsuranceCarrier(e.target.value)}
        />
      </div>

      {/* Find Now Button */}
      <div className="find-now-btn">
        <span className="find-now-text"><FaSearch /> Find Now</span>
      </div>
    </div>
  );
};

export default SearchBar;
