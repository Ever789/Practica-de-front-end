import React from 'react';
import axios from 'axios';
import '../estilos/Table.css';

function Table({ movies, setTableMovies }) {

  const removeMovieFromTable = (imdbID) => {
    // Filter out the movie with the provided imdbID from the tableMovies array
    const updatedTableMovies = movies.filter(movie => movie.imdbID !== imdbID);
    // Update the state with the filtered movies
    setTableMovies(updatedTableMovies);

    // Update the basket by sending a POST request to remove the movie
    axios.post('https://getpantry.cloud/apiv1/pantry/b027ecf8-32c5-4f2c-b46e-0d3d43dbeb08/basket/newBasket21', {
      movies: updatedTableMovies
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <div className='table-container'>
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Type</th>
            <th>Actions</th> {/* Added a column for Actions */}
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.imdbID}>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.Type}</td>
              <td>
                <button onClick={() => removeMovieFromTable(movie.imdbID)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
