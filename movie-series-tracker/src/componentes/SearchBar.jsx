import React, { useState } from 'react';
import '../estilos/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (query) => {
    try {
      const res = await fetch(`http://www.omdbapi.com/?apikey=16008160&s=${query}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const resJSON = await res.json();
      onSearch(resJSON.Search || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search media..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;