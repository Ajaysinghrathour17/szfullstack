// DropdownInputs.js

import React, { useState } from 'react';

function Dropdown() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);

  // Define an array of countries and their corresponding cities
  const countryCitiesMap = {
    USA: ['New York', 'Los Angeles', 'Chicago'],
    UK: ['London', 'Manchester', 'Birmingham'],
    France: ['Paris', 'Marseille', 'Lyon'],
  };

  // Event handler for when the country is selected
  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry);
    // Update the cities dropdown based on the selected country
    setCities(countryCitiesMap[selectedCountry] || []);
    // Reset selected city
    setSelectedCity('');
  };

  // Event handler for when the city is selected
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <label htmlFor="country">Country:</label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {Object.keys(countryCitiesMap).map((country) => (
          <option key={country} value={country} >
            {country} 
          </option>
        ))}
      </select>

      <label htmlFor="city">City:</label>
      <select id="city" value={selectedCity} onChange={handleCityChange} disabled={!selectedCountry}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
