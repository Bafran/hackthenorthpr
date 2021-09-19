import React from 'react';
import '../landing.css';

const Landing = () => {
  return (
    <div className="full-container">
      <h1 className="header">Hello. Welcome to [name].</h1>
      <p className="subheader">The new way to streamline planning.</p>
      <p className="prompt">Enter your room code to start!</p>
      <div className="entry">
        <input
          className="input-field"
          type="text"
          placeholder="Enter your room code here"
        ></input>
        <button className="submit" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Landing;
