import React from "react";
import '../estilos/Card.css';

const Card = ({movie}) => {
  return (
    <div>
      <div className="card">
        <img src={movie.Poster} alt={movie.Title} className="card img"/>
        <div className="card-body">
          <h4>{movie.Title} {movie.Year}</h4>
          <p>{movie.Type}</p>
        </div>
      </div>
    </div>
  )
}

export default Card