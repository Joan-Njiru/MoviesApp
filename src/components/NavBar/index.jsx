
import React, { useState } from "react";
import './style.css';
import { getSearch } from "../../utilis/utilities";

const MovieSearch = ({ onSearchResults }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setSearchValue(value);
    try {
      const search = await getSearch(searchValue);
      if (search.ok) {
        const searchResults = search.results.filter(movie =>
          movie.title.toLowerCase().includes(value.toLowerCase())
        );
        onSearchResults(searchResults); 
      } else {
        onSearchResults([]); 
      }
    } catch (error) {
      onSearchResults([]); 
    }
  };
  return (
    <div>
      <input
        type="text"
        value={searchValue}
        placeholder="Search movie here"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default MovieSearch;
