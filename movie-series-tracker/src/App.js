import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import SearchBar from './componentes/SearchBar';
import List from './componentes/List';
import Table from './componentes/Table';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [tableMovies, setTableMovies] = useState([]);
  const addMovieToTable = (movie) => {
    if (!tableMovies.some(existingMovie => existingMovie.imdbID === movie.imdbID)) {
      setTableMovies([...tableMovies, movie]);
      axios.post('https://getpantry.cloud/apiv1/pantry/b027ecf8-32c5-4f2c-b46e-0d3d43dbeb08/basket/newBasket21', {
        movies: [...tableMovies, movie]
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  };

  useEffect(() => {
    axios.get('https://getpantry.cloud/apiv1/pantry/b027ecf8-32c5-4f2c-b46e-0d3d43dbeb08/basket/newBasket21')
      .then(function (response) {
        setTableMovies(response.data.movies || []);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <SearchBar onSearch={setMovies} />
        <Table movies={tableMovies} setTableMovies={setTableMovies} />
        <div className="card-container">
          <List movies={movies} onAddToTable={addMovieToTable} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;