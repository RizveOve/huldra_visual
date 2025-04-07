import React, { useState } from "react";
import "../assets/css/audioTest.css";
import "../assets/css/demonstration.css";

const AudioTest = () => {
  const [rating, setRating] = useState("");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setRating(selectedValue); // Update the state with the selected value
    localStorage.setItem("audioRating", selectedValue); // Save the value in local storage
  };

  return (
    <div className="container">
      <header className="header">
        <span className="id">766c2f8d-191e-4355-a867-736a9474603f</span>
        <span className="title">Huldra | Audio Test</span>
      </header>

      <div className="content">
        <div className="audio-player">
          {/* Audio player using the provided external audio link */}
          <audio controls>
            <source
              src="https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav"
              type="audio/wav"
            />
            Your browser does not support the audio element.
          </audio>
        </div>

        <div className="rating-section">
          <h2>Rate the audio quality from 1 to 10</h2>

          {/* Dropdown */}
          <select value={rating} onChange={handleChange} className="dropdown">
            <option value="" disabled>
              Select a rating
            </option>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <footer className="footer">
        <button className="previous">Previous</button>
        <button className="alternative">Alternative</button>
        <button className="next">Next</button>
      </footer>
    </div>
  );
};

export default AudioTest;
