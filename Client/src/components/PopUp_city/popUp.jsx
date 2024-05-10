// Popup.js

import React, { useState } from 'react';

const Popup = ({ isOpen, onClose, cities }) => {
  const [hoveredCity, setHoveredCity] = useState(null);

  const handleCityClick = (cityName) => {
    // Navigate to itinerary page when a city is clicked
    window.location.href = `/itinerary`;
  };

  const handleCityMouseEnter = (cityName) => {
    // Set the hovered city for background color change
    setHoveredCity(cityName);
  };

  const handleCityMouseLeave = () => {
    // Reset hovered city when mouse leaves
    setHoveredCity(null);
  };

  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Generating Travel Options for You...</h2>
            <ul>
              {cities.map((city, index) => (
                <li
                  key={index}
                  onClick={() => handleCityClick(city.name)}
                  onMouseEnter={() => handleCityMouseEnter(city.name)}
                  onMouseLeave={handleCityMouseLeave}
                  style={{
                    backgroundColor: hoveredCity === city.name ? 'lightblue' : 'transparent',
                  }}
                >
                  <img src={city.image} alt={city.name} />
                  <p>{city.name}</p>
                </li>
              ))}
            </ul>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
