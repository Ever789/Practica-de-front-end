import React from 'react';
import Card from './Card';

function List({ movies, onAddToTable }) {
  return (
    <div className="row">
      {movies.map(movie => (
        <Card key={movie.imdbID} movie={movie} onAddToTable={onAddToTable} />
      ))}
    </div>
  );
}

export default List;