import React from "react";
import '../estilos/Card.css';

function Card({ movie, onAddToTable }) {
  return (
    <div>
      <div className="card">
        <img src={movie.Poster} alt={movie.Title} className="card img"/>
        <div className="card-body">
          <h4>{movie.Title}</h4>
          <h4>{movie.Year}</h4>
          <p>{movie.Type}</p>
          <button onClick={() => onAddToTable(movie)}>Add to Table</button>
        </div>
      </div>
    </div>
  )
}

export default Card;