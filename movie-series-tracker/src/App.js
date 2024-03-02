import React, { useState } from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import SearchBar from './componentes/SearchBar';
import List from './componentes/List';

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    try {
      const res = await fetch(`http://www.omdbapi.com/?apikey=16008160&s=${query}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const resJSON = await res.json();
      setMovies(resJSON.Search || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <SearchBar onSearch={handleSearch} />
        <div className="card-container">
          <List movies={movies} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

/*
NOTA!!!
El diseño no esta completo todavia
Pero la API es totalmente funcional para el cometido
Hay que ingresar un titulo, año o alguna otra categoria de alguna pelicula
Y solo con nombres en ingles
*/