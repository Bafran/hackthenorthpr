import React from "react";
import "../landing.css";
import logo from "../htn_logo.png";


const Landing = () => {
  return (
    <div className="full-container">
      <div className="left-container">
        <h1 className="header">Welcome to <br></br> Chatr Planr.</h1>
        <p className="subheader">The new way to streamline planning.</p>
        <p className="prompt">Enter your room code to start!</p>
        <div className="entry">
          <input className="input-field" type="text" placeholder="Enter your room code here"></input>
          <button className="submit" type="submit">Submit</button>
        </div>
      </div>
      <div className="right-container">
        <img className="logo" src={logo} alt="calendar with speech bubbles" />
      </div>
    </div>
  );
};

export default Landing;
