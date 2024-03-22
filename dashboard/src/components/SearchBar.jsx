import React, { useState } from 'react';
import "../styles/search.scss";

function SearchBar({ onSearch }){
    const [searchQuery, setSearchQuery] = useState('');


    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
      };

      const handleSearch = () => {
        onSearch(searchQuery);
      };
    
  return (
    <div className='search-bar-container'>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        className='search-input'
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;