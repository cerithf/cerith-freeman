import React, { useState } from "react";
import "../../src/styles/stripes.scss";
import NavBar from "../components/NavBar";
import CircularText from "../components/CircularText";
import "../styles/pages/home.scss";

const subtitle = "Front-end Developer";

const Home = () => {
  return (
    <div className="page-content homePage">
      <div id="headingContainer">
        <CircularText radius={26} textColour="white">
          {subtitle}
        </CircularText>
        <h4 className="mobile-only">{subtitle}</h4>
        <h1>
          Cerith
          <br />
          Freeman
        </h1>
      </div>
      <div className="stripes">
        <div className="stripe-group-1">
          <div id="stripe-1"></div>
          <div id="stripe-2"></div>
          <div id="stripe-3"></div>
        </div>
        <div className="stripe-group-2">
          <div id="stripe-4"></div>
          <div id="stripe-5"></div>
          <div id="stripe-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
