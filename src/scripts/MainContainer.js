// MainContainer.js
import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import SearchBar from "./SearchBar";
import "../styles/MainContainer.css";

const MainContainer = () => {
  return (
    <div className="main-container">
      <LeftSide />
      <RightSide />
      <SearchBar />
    </div>
  );
};

export default MainContainer;
