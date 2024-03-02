import React from "react";
import Card from './Card';

const List = ({ movies }) => {
  return (
    <div className="row">
      {movies.map(movie => (
        <Card key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default List;