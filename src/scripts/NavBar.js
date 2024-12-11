import { FiChevronDown } from "react-icons/fi";

import React, { useState } from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="outer-rectangle">
      <div className="inner-group">
        {/* Logo and Name Group */}
        <div className="logo-name-group">
          <img src="/assets/vector.png" alt="Logo" className="logo" />
          <div className="logo-text">ProVital</div>
        </div>

        {/* Navbar Group */}
        <div className="navbar-group">
          <span className="nav-item">List your practice</span>
          <span className="separator"></span>
          <span className="nav-item">For Employees</span>
          <span className="separator"></span>
          <span className="nav-item">Courses</span>
          <span className="separator"></span>
          <span className="nav-item">Books</span>
          <span className="separator"></span>
          <span className="nav-item">Speakers</span>
          <span className="separator"></span>
          <span className="nav-item">Doctors</span>
          <span className="separator"></span>

          {/* Login/Signup Dropdown */}
          <div className="login-signup">
            <span>Login/Signup</span>
            <div className="dropdown-arrow" onClick={toggleDropdown}>
              <FiChevronDown />
            </div>
            {dropdownVisible && (
              <div className="dropdown-box">
                <div className="dropdown-content">
                  <div className="dropdown-row">
                    <span>Doctor</span>
                    <a href="#" className="dropdown-link">
                      Login
                    </a>
                    <a href="#" className="dropdown-link">
                      Signup
                    </a>
                  </div>
                  <div className="dropdown-row">
                    <span>Patient</span>
                    <a href="#" className="dropdown-link">
                      Login
                    </a>
                    <a href="#" className="dropdown-link">
                      Signup
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
